var cityEl = document.querySelector('#City')
var cityForm = document.querySelector('#cityForm')
// var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=1a94d023f0ce6163537e0b2fd1efff1c'
var day1Temp = $('#day1-temp')
var day1Image = $('#day1-image')
var day1Wind = $('#day1-wind')
var myCityName = $('#city-name')
var day1Humidity = $('#day1-humidity')
var day2 = $('#day2')
var day3 = $('#day3')
var day4 = $('#day4')
var day5 = $('#day5')
var icon1;

var cityName = function(event){
    event.preventDefault();

    var city = cityEl.value.trim();

    if (city) {
        getCityName(city);

        cityEl.value = '';
    } else {
        alert('Enter valid city')
    }
}
var getCityName = function (myCity){
    var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + myCity + '&appid=1a94d023f0ce6163537e0b2fd1efff1c' + '&units=metric';

    fetch (apiUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data.list)
            for (var i = 0; i < data.list.length; i = i + 8){
                //Remeber to add 8 to the [] to jump a day
                icon1 = 'http://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@2x.png'
                icon2 = 'http://openweathermap.org/img/wn/' + data.list[8].weather[0].icon + '@2x.png'
                icon3 = 'http://openweathermap.org/img/wn/' + data.list[16].weather[0].icon + '@2x.png'
                icon4 = 'http://openweathermap.org/img/wn/' + data.list[24].weather[0].icon + '@2x.png'
                icon5 = 'http://openweathermap.org/img/wn/' + data.list[32].weather[0].icon + '@2x.png'
                console.log(data.list[i])
                console.log(data.list[i].main.temp)
                console.log(data.list[i].wind.speed)
                console.log(data.list[i].main.humidity)
                console.log(icon1)
                console.log(data.list[i].dt_txt)
                
            }
            myCityName.append(data.list[0].dt_txt)
            day1Temp.append(data.list[0].main.temp + '°C')
            day1Image.attr('src', icon1)
            day1Wind.append('Wind: ' + data.list[0].wind.speed + ' m/s')
            day1Humidity.append('Humidity: ' + data.list[0].main.humidity + ' %')
        })
    }

cityForm.addEventListener('submit', cityName);

