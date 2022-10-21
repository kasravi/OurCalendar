var events = [
    {
        time: "?",
        filter: f=>f['persian'].year%100===0&&f['persian'].day===1&&f['persian'].month===1,
        name:"Turn of the Century (Persian)",
        tag:"persian",
    },
    {
        date:"1/0/1/persian",
        time: "?",
        name:"Nowruz",
        description:"Persian new year",
        link:"https://en.wikipedia.org/wiki/Nowruz",
        tag:"persian",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/1389-Norooz-haftseenWM.jpg/1024px-1389-Norooz-haftseenWM.jpg"
    },
    {
        date:"2/0/1/persian~5/0/1/persian",
        time: "?",
        name:"Nowruz days",
        description:"Persian new year days",
        link:"https://en.wikipedia.org/wiki/Nowruz",
        tag:"persian",
        image:"https://upload.wikimedia.org/wikipedia/commons/7/7d/%D9%86%D9%88%D8%B1%D9%88%D8%B2NowRouzIran2021.jpg"
    },
    {
        date:"-1/Tue/0/persian",
        time: "Evening",
        name:"Chaharshanbe Soori",
        description:"Persian festival of the eve of the last Wednesday of the year ",
        link:"https://en.wikipedia.org/wiki/Chaharshanbe_Suri",
        tag:"persian",
        image:"https://upload.wikimedia.org/wikipedia/commons/9/97/%C4%8CAH%C4%80R%C5%A0ANBA-S%C5%AAR%C4%AA.jpg"
    },
    {
        date:"-1/0/9/persian",
        time:"Night",
        name:"Yalda",
        description:"Iranian Northern Hemisphere's winter solstice festival",
        link:"https://en.wikipedia.org/wiki/Yald%C4%81_Night",
        tag:"persian",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Yalda_Night_Table_Amsterdam_2011_Photo_by_Pejman_Akbarzadeh_Persian_Dutch_Network.jpg/413px-Yalda_Night_Table_Amsterdam_2011_Photo_by_Pejman_Akbarzadeh_Persian_Dutch_Network.jpg"
    },
    {
        date:"13/0/0/persian",
        time:"late morning~late evening",
        name:"13 be dar",
        description:"Iranian festival of picnicking outdoors at the end of Nowruz holidays",
        link:"https://en.wikipedia.org/wiki/Sizdah_Be-dar",
        tag:"persian",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Persians_in_Holland_Celebrating_Sizdah_Bedar%2C_April_2011_-_Photo_by_Persian_Dutch_Network-PDN.jpg/360px-Persians_in_Holland_Celebrating_Sizdah_Bedar%2C_April_2011_-_Photo_by_Persian_Dutch_Network-PDN.jpg"
    },
    {
        date:"-50/0/0/persian",
        time:"late evening",
        name:"Sadeh",
        description:"Iranian winter festival",
        link:"https://en.wikipedia.org/wiki/Sadeh",
        tag:"persian",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Sadeh.jpg/480px-Sadeh.jpg"
    },
    {
        date:"-1/0/6/persian",
        time:"afternoon~night",
        name:"Mehergan",
        description:"Iranian festival of celebrating Mitra, friendship, taxes and harvest",
        link:"https://en.wikipedia.org/wiki/Mehregan",
        tag:"persian",
        image:"https://upload.wikimedia.org/wikipedia/commons/d/d3/Mehregan_Table_Persian_Festival_of_Autumn_in_Holland_Photo_by_Persian_Dutch_Network_2011.jpg"
    },
    {
        date:"1/Sat/2/iso8601~1/Sun/2/iso8601",
        time:"morning~night",
        name:"Ablomov Weekend",
        description:"Two whole days on couch,just eat and sleep and mayyyybe read book",
        link:"https://en.wikipedia.org/wiki/Oblomov",
        date:"1/Sat/2/iso8601~1/Sun/2/iso8601",
        tag:"ours",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Oblomov_1915.jpg/800px-Oblomov_1915.jpg"
    },
    {
        date:"3/Wed/9/iso8601",
        time:"afternoon",
        name:"Window Shopping Afternoon",
        description:"As a form of leisure",
        link:"https://en.wikipedia.org/wiki/Window_shopping",
        tag:"ours",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Window_shopping_picture_2.jpg/330px-Window_shopping_picture_2.jpg"

    },
    {
        date:"3/Sat/10/iso8601",
        time:"noon",
        name:"Open house day",
        description:"Find one or more open houses and check them out",
        link:"https://www.bankrate.com/real-estate/what-is-an-open-house/#:~:text=During%20an%20open%20house%2C%20a,scheduled%20hours%2C%20without%20an%20appointment.",
        tag:"ours",
        image:"https://www.bankrate.com/2022/06/15162622/what-is-an-open-house.jpg?auto=webp&optimize=high&crop=16:9&width=912"
    },
    {
        date:"1/Tue/1/iso8601",
        time:"afternoon",
        name:"Museum Day",
        description:"Find a new museum to visit",
        link:"https://en.wikipedia.org/wiki/Museum",
        tag:"ours",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Grand-Egyptian-Museum-3.jpg/330px-Grand-Egyptian-Museum-3.jpg"        
    },
    {
        date:"2/Sat/11/iso8601",
        time:"?",
        name:"Silence Day",
        description:"Keep our mouths closed for an entire 24 hours",
        link:"https://www.healthline.com/health/mind-body/physical-and-mental-health-benefits-of-silence",
        tag:"ours",
        image:"https://post.healthline.com/wp-content/uploads/2021/09/Female_Breathing_Outside_1296x728-header-1296x729.jpg"
    },
    {
        date:"1/0/9/islamic",
        time:"?",
        name:"Fasting Day",
        description:"Don't eat and drink anything from dusk sunrise to sunset",
        link:"https://en.wikipedia.org/wiki/Fasting",
        tag:"ours",
        image:"https://upload.wikimedia.org/wikipedia/commons/6/6c/Intermittent_Fasting_101.jpg"
    },
    {
        date:"1/Sat/3/iso8601",
        time:"?",
        name:"MeDay (Masi's Version)",
        description:"World should rotate around Masi for a whole 24 hour",
        link:"https://www.urbandictionary.com/define.php?term=Me%20day",
        tag:"ours",
        image:""
    },
    {
        date:"-1/Sat/2/iso8601",
        time:"?",
        name:"MeDay (Morteza's Version)",
        description:"World should rotate around Morteza for a whole 24 hour",
        link:"https://www.urbandictionary.com/define.php?term=Me%20day",
        tag:"ours",
        image:""
    },
    {
        date:"-1/Thu/2/iso8601",
        time:"evening",
        name:"Knitting Evening",
        description:"Start or continue a knitting or a crochet after work and watch TV",
        link:"",
        tag:"ours",
        image:""
    },
    {
        date:"1/Sat/12/iso8601",
        time:"?",
        name:"Volunteer Day",
        description:"",
        link:"https://en.wikipedia.org/wiki/Volunteering",
        tag:"ours",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Vilnius_Marathon_2015_volunteers_by_Augustas_Didzgalvis.jpg/330px-Vilnius_Marathon_2015_volunteers_by_Augustas_Didzgalvis.jpg"
    },
    {
        date:"3/Wed/11/iso8601",
        time:"evening",
        name:"Restaurant Day",
        description:"",
        link:"",
        tag:"ours",
        image:""
    },
    {
        date:"1/Sat/3/iso8601~1/Sun/3/iso8601",
        time:"?",
        name:"Plant Day",
        description:"",
        link:"",
        tag:"ours",
        image:""
    },
    {
        date:"2/Mon/1/iso8601",
        time:"evening",
        name:"Game Day",
        description:"",
        link:"",
        tag:"ours",
        image:""
    },
    {
        date:"-1/Sun/0/iso8601",
        time:"?",
        name:"Binge Watching Day",
        description:"",
        link:"",
        tag:"ours",
        image:""
    },
    {
        date:"1/Sat/5/iso8601",
        time:"?",
        name:"Hedone Day",
        description:"",
        link:"",
        tag:"ours",
        image:""
    },
    {
        date:"-1/Sat/7/iso8601",
        time:"?",
        name:"Drunk Day",
        description:"",
        link:"",
        tag:"ours",
        image:""
    },
    {
        date:"-2/Sat/4/iso8601",
        time:"afternoon",
        name:"Stadium Day",
        description:"",
        link:"",
        tag:"ours",
        image:""
    },
    {
        name:"New Food Day",
        tag:"ours"
    },
    {
        name:"Random Culture Day",
        tag:"ours"
    },
    {
        name:"New Author Day",
        tag:"ours"
    },
    {
        name:"New Composer Day",
        tag:"ours"
    },
    {
        name:"Abu-Darda Aash Day",
        tag:"ours"
    },
    {
        name:"Stargazing Night",
        tag:"ours"
    },
    {
        name:"Cloud gazing Day",
        tag:"ours"
    },
    {
        name:"Wine and Cheese Day",
        tag:"ours"
    },
    {
        name:"No Electricity Day",
        tag:"ours"
    },
    {
        name:"Smelling Day",
        description:"Find 10 things and smell them to celebrate our nose",
        tag:"ours"
    },
    {
        name:"Kite Day",
        tag:"ours"
    },
    {
        name:"Paper Airplane Day",
        description:"Challenge ourselves to build the best paper airplane",
        tag:"ours"
    },
    {
        name:"Suguroi's Day",
        description:"Donate to a wildlife nursery",
        tag:"ours"
    },
    {
        name:"Masi's Birth Day",
        date:"25/0/2/persian",
        time:"afternoon",
        tag:"also ours"
    },
    {
        name:"Morteza's Birth Day",
        date:"7/0/1/persian",
        time:"afternoon",
        tag:"also ours"
    },
    {
        name:"Our Wedding Anniversary",
        date:"26/0/8/persian",
        time:"afternoon",
        tag:"also ours"
    },
    {
        name:"First Date Day",
        date:"24/0/1/persian",
        time:"afternoon",
        tag:"also ours"
    },
    {
        name:"Mexican Day of the dead",
        date:"1/0/11/iso8601",
        time:"late night",
        link:"https://en.wikipedia.org/wiki/Day_of_the_Dead",
        tag:"other cultures"
    },
    {
        name:"Thai's Songkran Water Festival",
        date:"13/0/4/iso8601",
        tag:"other cultures"
    },
    {
        name:"Bavaia's Oktoberfest",
        date:"1/Fri/10/iso8601",
        tag:"other cultures"
    },
    {
        name:"Rio’s Carnival Day",
        date:"25/0/2/iso8601",
        description:"dance",
        tag:"other cultures"
    },
    {
        name:"Søndervig WinterBad",
        date:"-1/0/0/iso8601",
        time:"11:00",
        description:"Jump into the water and eat champagne, oysters and marzipan cake",
        tag:"other cultures"
    },
    {
        name:"Misogi Night",
        description:"Take bath late into the night",
        tag:"other cultures"
    },
    {
        name:"Celtic Dipping Night",
        description:"jump into the water late into the night",
        tag:"other cultures"
    },
    {
        name:"Tsukimi Night",
        date:"10/0/11/iso8601",
        time:"late evening",
        description:"Moon Watching"
    }
]
