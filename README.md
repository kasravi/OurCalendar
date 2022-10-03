# Events Schema

## date
- nth day of mth month of c calendar 
    - n/0/m/c
    - 7/0/1/persian => 7th day of first month of Persian Calendar
- nth weekday of mth month of c calndar 
    - n/w/m/c
    - 1/Sat/1/iso8601 => first Saturday of first month of georgian calendar
- nth day of year
    - n/0/0/c
    - 1/0/0/persian => first day of persian calendar
- nth last will be noted via negative values
    - -1/Wed/0/persian => last Wednesday of persian calendar

### calendars
usable calendars are 
- buddhist
- chinese
- coptic
- ethioaa
- ethiopic
- hebrew
- indian
- islamic
- islamicc
- iso8601
- japanese
- persian
- roc
### date span
- date span will be noted via ~ 

### events with js filters
if an events contains a filter, the function will be ran on days array and same events will be added on filtered days. can be used for events which have mathematical origins like turn of the century.

days array have a structure like this for all days of current iso8601 year and extra years from past and future:
```
[{
    year: iso8601 year,
    month: iso8601 month,
    day: iso8601 day,
    weekday: weekday,
    'calendar-name':{
        year: calendar-year
        month: calendar-month
        day: calendar-day
    }
}]
```
due to years' start and end of different calendars don't match, this array is built with one more year in addition in beginning and end. so if we want to build the calendar for current, past, and next year, this array will contain 5 consecutive iso8601 years to ensure we have at least 3 of each non iso calendars.

## time
- descriptive (Morning,Noon,AfterNoon,Evening,Night,Midnight)
- descriptive can be prefixed by (early, late, exact)
- exact hh:MM:ss or hh:MM or hh
- ? or undefined means no specific time (all day)

### time span 
like date ~ means consecutive