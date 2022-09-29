var events = [
    {
        "date":"1/0/1/persian",
        "time": "?",
        "name":"Nowruz",
        "description":"Persian new year",
        "link":"https://en.wikipedia.org/wiki/Nowruz",
        "tag":"persian"
    },
    {
        "date":"2/0/1/persian~5/0/1/persian",
        "name":"Nowruz days",
        "description":"Persian new year days",
        "tag":"persian"
    },
    {
        "date":"-1/Tue/0/persian",
        "time": "Evening",
        "name":"Chaharshanbe Soori",
        "tag":"persian"
    },
    {
        "date":"-1/0/9/persian",
        "time":"Night",
        "name":"Yalda",
        "description":"",
        "link":"",
        "tag":"persian"
    },
    {
        "date":"13/0/0/persian",
        "time":"late morning~late evening",
        "name":"13 be dar",
        "tag":"persian"
    },
    {
        "date":"-50/0/0/persian",
        "time":"late evening",
        "name":"Sadeh",
        "tag":"persian"
    },
    {
        "date":"-1/0/6/persian",
        "time":"afternoon~night",
        "description":"",
        "name":"Mehergan",
        "tag":"persian"
    },
    {
        "name":"Ablomov Weekend",
        "description":"Two whole days on couch,just eat and sleep and mayyyybe read book",
        "date":"1/Sat/2/iso8601~1/Sun/2/iso8601",
        "time":"morning~night",
        "tag":"ours"
    },
    {
        "name":"Window Shopping Afternoon",
        "date":"3/Wed/9/iso8601",
        "time":"afternoon",
        "tag":"ours"
    },
    {
        "name":"Open house day",
        "description":"Find one or more open houses and check them out",
        "date":"3/Sat/10/iso8601",
        "tag":"ours"
    },
    {
        "name":"Museum Day",
        "description":"Find a new museum to visit",
        "date":"1/Tue/1/iso8601",
        "time":"afternoon",
        "tag":"ours"
    },
    {
        "name":"Silence Day",
        "description":"Keep our mouths closed for an entire 24 hours",
        "date":"2/Sat/11/iso8601",
        "tag":"ours"
    },
    {
        "name":"Fasting Day",
        "description":"Don't eat and drink anything from dusk sunrise to sunset",
        "date":"4/Thu/10/iso8601",
        "tag":"ours"
    },
    {
        "name":"MeDay (Masi's Version)",
        "description":"World should rotate around Masi for a whole 24 hour",
        "date":"1/Sat/2/iso8601",
        "tag":"ours"
    },
    {
        "name":"MeDay (Morteza's Version)",
        "description":"World should rotate around Morteza for a whole 24 hour",
        "date":"-1/Sat/2/iso8601",
        "tag":"ours"
    },
    {
        "name":"Knitting Evening",
        "description":"Start or continue a knitting or a crochet after work and watch TV",
        "date":"-1/Thu/2/iso8601",
        "tag":"ours"
    },
    {
        "name":"Volunteer Day",
        "tag":"ours"
    },
    {
        "name":"Restaurant Day",
        "tag":"ours"
    },
    {
        "name":"Plant Day",
        "tag":"ours"
    },
    {
        "name":"Game Day",
        "tag":"ours"
    },
    {
        "name":"Binge Watching Day",
        "tag":"ours"
    },
    {
        "name":"Hedone Day",
        "tag":"ours"
    },
    {
        "name":"Drunk Day",
        "tag":"ours"
    },
    {
        "name":"Stadium Day",
        "tag":"ours"
    },
    {
        "name":"New Food Day",
        "tag":"ours"
    },
    {
        "name":"Random Culture Day",
        "tag":"ours"
    },
    {
        "name":"New Author Day",
        "tag":"ours"
    },
    {
        "name":"New Composer Day",
        "tag":"ours"
    },
    {
        "name":"Abu-Darda Aash Day",
        "tag":"ours"
    },
    {
        "name":"Stargazing Night",
        "tag":"ours"
    },
    {
        "name":"Cloud gazing Day",
        "tag":"ours"
    },
    {
        "name":"Wine and Cheese Day",
        "tag":"ours"
    },
    {
        "name":"No Electricity Day",
        "tag":"ours"
    },
    {
        "name":"Smelling Day",
        "description":"Find 10 things and smell them to celebrate our nose",
        "tag":"ours"
    },
    {
        "name":"Kite Day",
        "tag":"ours"
    },
    {
        "name":"Paper Airplane Day",
        "description":"Challenge ourselves to build the best paper airplane",
        "tag":"ours"
    },
    {
        "name":"Suguroi's Day",
        "description":"Donate to a wildlife nursery",
        "tag":"ours"
    },
    {
        "name":"Masi's Birth Day",
        "date":"25/0/2/persian",
        "time":"afternoon",
        "tag":"also ours"
    },
    {
        "name":"Morteza's Birth Day",
        "date":"7/0/1/persian",
        "time":"afternoon",
        "tag":"also ours"
    },
    {
        "name":"Our Wedding Anniversary",
        "date":"26/0/8/persian",
        "time":"afternoon",
        "tag":"also ours"
    },
    {
        "name":"First Date Day",
        "date":"24/0/1/persian",
        "time":"afternoon",
        "tag":"also ours"
    },
    {
        "name":"Mexican Day of the dead",
        "date":"1/0/11/iso8601",
        "time":"late night",
        "link":"https://en.wikipedia.org/wiki/Day_of_the_Dead",
        "tag":"other cultures"
    },
    {
        "name":"Thai's Songkran Water Festival",
        "date":"13/0/4/iso8601",
        "tag":"other cultures"
    },
    {
        "name":"Bavaia's Oktoberfest",
        "date":"1/Fri/10/iso8601",
        "tag":"other cultures"
    },
    {
        "name":"Rio’s Carnival Day",
        "date":"25/0/2/iso8601",
        "description":"dance",
        "tag":"other cultures"
    },
    {
        "name":"Søndervig WinterBad",
        "date":"-1/0/0/iso8601",
        "time":"11:00",
        "description":"Jump into the water and eat champagne, oysters and marzipan cake",
        "tag":"other cultures"
    },
    {
        "name":"Misogi Night",
        "description":"Take bath late into the night",
        "tag":"other cultures"
    },
    {
        "name":"Celtic Dipping Night",
        "description":"jump into the water late into the night",
        "tag":"other cultures"
    },
    {
        "name":"Tsukimi Night",
        "date":"10/0/11/iso8601",
        "time":"late evening",
        "description":"Moon Watching"
    }
]
