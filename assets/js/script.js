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
        var cityValue = response.name;
        var iconValue = response.weather;
        var tempValue = response.main.temp;
        var humidityValue = response.main.humidity;
        var windValue = response.wind.speed;
        cityEl.innerHTML = cityValue;
        iconEl.innerHTML = iconValue;
        tempEl.innerHTML = Math.floor(tempValue);
        humidityEl.innerHTML = humidityValue;
        windEl.innerHTML = windValue;
    })

    var now = moment().format('MM-DD-YY');
    dateEl.innerHTML = now;

    // var searchHistoryEl = document.querySelector(".weather-search-history");

    // var historyEl = document.createElement("span");
    // historyEl.textContent = searchInput;
    // searchHistoryEl.appendChild(historyEl);
};

// var fiveDayDateEl = document.querySelector(".five-day-date")
// var fiveDayTempEl = document.querySelector(".five-day-temp")
// var fiveDayHumidityEl = document.querySelector(".five-day-humidity")

// function getFiveDay() {
//     var searchInput = document.querySelector(".search-input").value;
//     var api = 'http://api.openweathermap.org/data/2.5/forecast?q=' + searchInput + '&units=imperial&appid=76db80d7cffbdb0aad58fd5a05192940';
//     console.log(api);
//     fetch(api)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(response) {
//         var fiveDayTempValue = response.list;
//         fiveDayTempEl.innerHTML = fiveDayTempValue;
//     });

// };

searchButton.addEventListener("click", getCurrentWeather);
searchButton.addEventListener("click", getFiveDay);