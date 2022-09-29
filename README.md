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

## time
- descriptive (Morning,Noon,AfterNoon,Evening,Night,Midnight)
- descriptive can be prefixed by (early, late, exact)
- exact hh:MM:ss or hh:MM or hh
- ? or undefined means no specific time (all day)

### time span 
like date ~ means consecutive