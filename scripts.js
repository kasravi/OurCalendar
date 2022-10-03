var DateTime = luxon.DateTime;
var calendarNames = [
  "buddhist",
  "chinese",
  "coptic",
  "ethioaa",
  "ethiopic",
  "hebrew",
  "indian",
  "islamic",
  "islamicc",
  "iso8601",
  "japanese",
  "persian",
  "roc",
];
var dayTimes = ["morning", "noon", "afternoon", "evening", "night"];
var dayTimePrefixes = ["early ", "", "late "];
var t = 0;
var dayTimesDict = {};
for (var dt = 0; dt < dayTimes.length; dt++) {
  for (var dtp = 0; dtp < dayTimePrefixes.length; dtp++) {
    dayTimesDict[`${dayTimePrefixes[dtp]}${dayTimes[dt]}`] = 9 + t++;
  }
}

var toLocal = (date, cal) => {
  var parts = date.reconfigure({ outputCalendar: cal }).toLocaleParts();
  year = parseInt(
    parts.find((f) => f.type === "year" || f.type === "relatedYear").value
  );
  month = parseInt(parts.find((f) => f.type === "month").value);
  day = parseInt(parts.find((f) => f.type === "day").value);
  return { year, month, day };
};

var getCurrentYear = (cal) =>
  parseInt(
    DateTime.now()
      .reconfigure({ outputCalendar: cal })
      .toLocaleParts()
      .find((f) => f.type === "year" || f.type === "relatedYear").value
  );

var buildDaysArray = (yearsNum, currentYearDic) => {
  var span = (yearsNum + 1) / 2 + 1;
  var startYear = currentYearDic["iso8601"] - span;
  var start = DateTime.fromObject({ year: startYear });
  return [...Array(2 * span * 365).keys()].map((i) => {
    var d = start.plus({ day: i });
    var result = {
      year: d.year,
      month: d.month,
      day: d.day,
      weekday: d.weekday,
    };
    calendarNames.forEach((c) => {
      result[c] = toLocal(d, c);
    });
    return result;
  });
};

var weekDaysToNumMap = {
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
  Sun: 7,
  0: 0,
};

filterDays = (days, filterFunc, count, rev) => {
  var c = days.filter(filterFunc);
  var t = c[(rev ? c.length - 1 : 0) + count];
  return DateTime.fromObject({
    year: t.year,
    month: t.month,
    day: t.day,
  });
};

getDateWithFilter = (days, filterFunc) => {
  return days.filter(filterFunc).map((t) =>
    DateTime.fromObject({
      year: t.year,
      month: t.month,
      day: t.day,
    })
  );
};

getDate = (dateString, n, days, currentYearDic) => {
  var d = dateString.split("/");
  d[1] = weekDaysToNumMap[d[1]];
  d[0] = parseInt(d[0]);
  d[2] = parseInt(d[2]);
  var count = parseInt(d[0]);
  var cal = d[3];
  var weekDay = d[1];
  var month = d[2];
  var rev = count < 0;
  count += rev ? 1 : -1;
  try {
    if (weekDay === 0) {
      if (month === 0) {
        return filterDays(
          days,
          (f) => f[cal].year === currentYearDic[cal] + n,
          count,
          rev
        );
      } else {
        return filterDays(
          days,
          (f) =>
            f[cal].year === currentYearDic[cal] + n && f[cal].month === month,
          count,
          rev
        );
      }
    } else {
      if (month === 0) {
        return filterDays(
          days,
          (f) =>
            f[cal].year === currentYearDic[cal] + n && f.weekday === weekDay,
          count,
          rev
        );
      } else {
        return filterDays(
          days,
          (f) =>
            f[cal].year === currentYearDic[cal] + n &&
            f.weekday === weekDay &&
            f[cal].month === month,
          count,
          rev
        );
      }
    }
  } catch (e) {
    console.log(e);
  }
};

getTime = (time) => {
  if (!time) {
    return { hour: 1 };
  }
  time = time.toLowerCase();
  if (dayTimes.some((f) => time.includes(f))) {
    return { hour: dayTimesDict[time.replaceAll("exact", "").trim()] };
  }
  var s = time.split(":");
  return {
    hour: s[0],
    minute: s.length > 1 ? s[1] : null,
    second: s.length > 1 ? s[2] : null,
  };
};

parseTime = (e) => {
  if (!e.time || e.time === "?" || e.time === "") {
    startTime = { hour: 9 };
    endTime = { hour: 23 };
    allDay = true;
  } else if (e.time.indexOf("~") > -1) {
    var times = e.time.split("~");
    startTime = getTime(times[0]);
    endTime = getTime(times[1]);
  } else {
    startTime = endTime = getTime(e.time);
  }

  return { startTime, endTime };
};

parseEvents = (yearsNum, days, currentYearDic) => {
  return [...Array(yearsNum).keys()]
    .flatMap((n) =>
      events.map((e) => {
        if (!e.date) return;
        var start = null,
          end = null,
          startTime = null,
          endTime = null,
          allDay = false;

        var { startTime, endTime } = parseTime(e);

        if (e.date) {
          if (e.date.indexOf("~") > -1) {
            var dates = e.date
              .split("~")
              .map((f) => getDate(f, n - 1, days, currentYearDic));
            start = dates[0].plus(startTime).toISO();
            end = dates[1].plus(endTime).toISO();
            allDay = false;
          } else {
            start = end = getDate(e.date, n - 1, days, currentYearDic);
            start = start.plus(startTime).toISO();
            end = end.plus(endTime).toISO();
          }

          return {
            title: e.name,
            start,
            end,
            allDay,
            extendedProps: {
              image: e.image ?? "https://picsum.photos/200",
              sub: e.description,
              tag: e.tag,
              link: e.link,
            },
          };
        } else if (e.filter) {
        }
      })
    )
    .filter((f) => f);
};

parseEventsWithFilter = (days) => {
  return events
    .flatMap((e) => {
      if (!e.filter) return;

      var dates = getDateWithFilter(days, e.filter);
      var { startTime, endTime } = parseTime(e);
      return dates.map((date) => {
        start = end = date;
        start = start.plus(startTime).toISO();
        end = end.plus(endTime).toISO();

        return {
          title: e.name,
          start,
          end,
          allDay,
          extendedProps: {
            image: e.image ?? "https://picsum.photos/200",
            sub: e.description,
            tag: e.tag,
            link: e.link,
          },
        };
      });
    })
    .filter((f) => f);
};
var buildEventsArray = (extraYears) => {
  var yearsNum = extraYears * 2 + 1;
  var currentYearDic = calendarNames.reduce((a, i) => {
    a[i] = getCurrentYear(i);
    return a;
  }, {});
  var days = buildDaysArray(yearsNum, currentYearDic);
  return [
    ...parseEvents(yearsNum, days, currentYearDic),
    ...parseEventsWithFilter(days),
  ];
};
