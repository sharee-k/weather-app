var cityEl = document.querySelector(".current-city");
var dateEl = document.querySelector(".current-date");
var iconEl = document.querySelector(".current-icon");
var tempEl = document.querySelector(".temp");
var humidityEl = document.querySelector(".humidity");
var windEl = document.querySelector(".wind");
var uvEl = document.querySelector(".uv");
var fiveDayEl = document.querySelector(".five-day");
var searchButton = document.querySelector("#search-button");
var searchCityEl = document.querySelector(".search-box");


function getCurrentWeather() {
    var searchInput = document.querySelector(".search-input").value;
    var api = 'http://api.openweathermap.org/data/2.5/weather?q=' + searchInput + '&units=imperial&appid=76db80d7cffbdb0aad58fd5a05192940';
    console.log(api);
    fetch(api)
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
        var cityValue = response.name;
        var iconValue = response.weather[0].main;
        var tempValue = response.main.temp;
        var humidityValue = response.main.humidity;
        var windValue = response.wind.speed;
        cityEl.innerHTML = cityValue;
        iconEl.innerHTML = iconValue;
        tempEl.innerHTML = Math.floor(tempValue);
        humidityEl.innerHTML = humidityValue;
        windEl.innerHTML = windValue;
    })

    //Add current date
    var now = moment().format('MM-DD-YY');
    dateEl.innerHTML = now;

    //Save historical searches
    var searchHistoryEl = document.querySelector(".weather-search-history");

    var historyEl = document.createElement("span");
    historyEl.textContent = searchInput;
    searchHistoryEl.appendChild(historyEl);
};

//Five day forecast
var fiveDayOneDateEl = document.querySelector(".five-day-date-one")
var fiveDayOneIconEl = document.querySelector(".five-day-icon-one")
var fiveDayOneTempEl = document.querySelector(".five-day-temp-one")
var fiveDayOneHumidityEl = document.querySelector(".five-day-humidity-one")

var fiveDayTwoDateEl = document.querySelector(".five-day-date-two")
var fiveDayTwoIconEl = document.querySelector(".five-day-icon-two")
var fiveDayTwoTempEl = document.querySelector(".five-day-temp-two")
var fiveDayTwoHumidityEl = document.querySelector(".five-day-humidity-two")

var fiveDayThreeDateEl = document.querySelector(".five-day-date-three")
var fiveDayThreeIconEl = document.querySelector(".five-day-icon-three")
var fiveDayThreeTempEl = document.querySelector(".five-day-temp-three")
var fiveDayThreeHumidityEl = document.querySelector(".five-day-humidity-three")

var fiveDayFourDateEl = document.querySelector(".five-day-date-four")
var fiveDayFourIconEl = document.querySelector(".five-day-icon-four")
var fiveDayFourTempEl = document.querySelector(".five-day-temp-four")
var fiveDayFourHumidityEl = document.querySelector(".five-day-humidity-four")

var fiveDayFiveDateEl = document.querySelector(".five-day-date-five")
var fiveDayFiveIconEl = document.querySelector(".five-day-icon-five")
var fiveDayFiveTempEl = document.querySelector(".five-day-temp-five")
var fiveDayFiveHumidityEl = document.querySelector(".five-day-humidity-five")

function getFiveDay() {
    var searchInput = document.querySelector(".search-input").value;
    var api = 'http://api.openweathermap.org/data/2.5/forecast?q=' + searchInput + '&units=imperial&appid=76db80d7cffbdb0aad58fd5a05192940';
    console.log(api);
    fetch(api)
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
        var fiveDayDateOneValue = response.list[3].dt_txt;
        var fiveDAyIconOneValue = response.list[3].weather[0].main;
        var fiveDayTempOneValue = response.list[3].main.temp;
        var fiveDayHumidityOneValue = response.list[3].main.humidity;
        fiveDayOneDateEl.innerHTML = fiveDayDateOneValue;
        fiveDayOneIconEl.innerHTML = fiveDAyIconOneValue;
        fiveDayOneTempEl.innerHTML = Math.floor(fiveDayTempOneValue);
        fiveDayOneHumidityEl.innerHTML = fiveDayHumidityOneValue;

        var fiveDayDateTwoValue = response.list[11].dt_txt;
        var fiveDAyIconTwoValue = response.list[11].weather[0].main;
        var fiveDayTempTwoValue = response.list[11].main.temp;
        var fiveDayHumidityTwoValue = response.list[11].main.humidity;
        fiveDayTwoDateEl.innerHTML = fiveDayDateTwoValue;
        fiveDayTwoIconEl.innerHTML = fiveDAyIconTwoValue;
        fiveDayTwoTempEl.innerHTML = Math.floor(fiveDayTempTwoValue);
        fiveDayTwoHumidityEl.innerHTML = fiveDayHumidityTwoValue;

        var fiveDayDateThreeValue = response.list[19].dt_txt;
        var fiveDAyIconThreeValue = response.list[19].weather[0].main; 
        var fiveDayTempThreeValue = response.list[19].main.temp;
        var fiveDayHumidityThreeValue = response.list[19].main.humidity;
        fiveDayThreeDateEl.innerHTML = fiveDayDateThreeValue;
        fiveDayThreeIconEl.innerHTML = fiveDAyIconThreeValue;
        fiveDayThreeTempEl.innerHTML = Math.floor(fiveDayTempThreeValue);
        fiveDayThreeHumidityEl.innerHTML = fiveDayHumidityThreeValue;

        var fiveDayDateFourValue = response.list[27].dt_txt;
        var fiveDayTempFourValue = response.list[27].main.temp;
        var fiveDAyIconFourValue = response.list[27].weather[0].main; 
        var fiveDayHumidityFourValue = response.list[27].main.humidity;
        fiveDayFourIconEl.innerHTML = fiveDAyIconFourValue;
        fiveDayFourDateEl.innerHTML = fiveDayDateFourValue;
        fiveDayFourTempEl.innerHTML = Math.floor(fiveDayTempFourValue);
        fiveDayFourHumidityEl.innerHTML = fiveDayHumidityFourValue;

        var fiveDayDateFiveValue = response.list[35].dt_txt;
        var fiveDAyIconFiveValue = response.list[35].weather[0].main;
        var fiveDayTempFiveValue = response.list[35].main.temp;
        var fiveDayHumidityFiveValue = response.list[35].main.humidity;
        fiveDayFiveDateEl.innerHTML = fiveDayDateFiveValue;
        fiveDayFiveIconEl.innerHTML = fiveDAyIconFiveValue;
        fiveDayFiveTempEl.innerHTML = Math.floor(fiveDayTempFiveValue);
        fiveDayFiveHumidityEl.innerHTML = fiveDayHumidityFiveValue;
    });
};

searchButton.addEventListener("click", getCurrentWeather);
searchButton.addEventListener("click", getFiveDay);