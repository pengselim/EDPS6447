var API_data = [
            {
                "number": 1,
                "name": "Today",
                "startTime": "2019-05-28T11:00:00-05:00",
                "endTime": "2019-05-28T18:00:00-05:00",
                "isDaytime": true,
                "temperature": 78,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "10 to 15 mph",
                "windDirection": "SE",
                "icon": "https://api.weather.gov/icons/land/day/tsra,30/tsra,70?size=medium",
                "shortForecast": "Showers And Thunderstorms Likely",
                "detailedForecast": "Showers and thunderstorms likely. Some of the storms could be severe. Cloudy, with a high near 78. Southeast wind 10 to 15 mph, with gusts as high as 20 mph. Chance of precipitation is 70%."
            },
            {
                "number": 2,
                "name": "Tonight",
                "startTime": "2019-05-28T18:00:00-05:00",
                "endTime": "2019-05-29T06:00:00-05:00",
                "isDaytime": false,
                "temperature": 56,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "5 to 15 mph",
                "windDirection": "SW",
                "icon": "https://api.weather.gov/icons/land/night/tsra_hi,60/bkn?size=medium",
                "shortForecast": "Showers And Thunderstorms Likely then Mostly Cloudy",
                "detailedForecast": "Showers and thunderstorms likely before 11pm. Mostly cloudy, with a low around 56. Southwest wind 5 to 15 mph, with gusts as high as 20 mph. Chance of precipitation is 60%."
            },
            {
                "number": 3,
                "name": "Wednesday",
                "startTime": "2019-05-29T06:00:00-05:00",
                "endTime": "2019-05-29T18:00:00-05:00",
                "isDaytime": true,
                "temperature": 71,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "10 mph",
                "windDirection": "NW",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "shortForecast": "Mostly Sunny",
                "detailedForecast": "Mostly sunny, with a high near 71. Northwest wind around 10 mph."
            }
        ];

// An example of how to retrieve a value from the array - set the index of the array item, then the property of the object
console.log("This is an example of how to retrieve a value from the array: " + API_data[0].number);

// https://www.w3schools.com/js/js_loop_for.asp

for (i = 0; i < API_data.length; i++){
    console.log(API_data[i]);
    
    // https://www.w3schools.com/js/js_if_else.asp
    // https://www.w3schools.com/js/js_comparisons.asp
    
    if(API_data[i].name ==  "Today"){
        console.log("The temperature today is " + API_data[i].temperature);
    }else if(API_data[i].name ==  "Tonight"){
        console.log("The temperature tonight is " + API_data[i].temperature);
    }else{
        console.log("The temperature on Wednesday is " + API_data[i].temperature)
    }
}
