var cityEl = document.querySelector('#City')
var cityForm = document.querySelector('#cityForm')
// var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=1a94d023f0ce6163537e0b2fd1efff1c'
var day1Temp = $('#day1-temp')
var day1Image = $('#day1-image')
var day1Wind = $('#day1-wind')
var dateAndTime1 = $('#date-and-time1')
var day1Humidity = $('#day1-humidity')

var day2Temp = $('#day2-temp')
var day2Image = $('#day2-image')
var day2Wind = $('#day2-wind')
var dateAndTime2 = $('#date-and-time2')
var day2Humidity = $('#day2-humidity')

var day3Temp = $('#day3-temp')
var day3Image = $('#day3-image')
var day3Wind = $('#day3-wind')
var dateAndTime3 = $('#date-and-time3')
var day3Humidity = $('#day3-humidity')

var day4Temp = $('#day4-temp')
var day4Image = $('#day4-image')
var day4Wind = $('#day4-wind')
var dateAndTime4 = $('#date-and-time4')
var day4Humidity = $('#day4-humidity')

var day5Temp = $('#day5-temp')
var day5Image = $('#day5-image')
var day5Wind = $('#day5-wind')
var dateAndTime5 = $('#date-and-time5')
var day5Humidity = $('#day5-humidity')

var day6Temp = $('#day6-temp')
var day6Image = $('#day6-image')
var day6Wind = $('#day6-wind')
var dateAndTime6 = $('#date-and-time6')
var day6Humidity = $('#day6-humidity')

var icon1;
var icon2;
var icon3;
var icon4;
var icon5;
var icon6;

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
                icon6 = 'http://openweathermap.org/img/wn/' + data.list[39].weather[0].icon + '@2x.png'
                console.log(data.list[i])
                console.log(data.list[i].main.temp)
                console.log(data.list[i].wind.speed)
                console.log(data.list[i].main.humidity)
                console.log(icon1)
                console.log(data.list[i].dt_txt)
                
            }
            dateAndTime1.append(data.list[0].dt_txt)
            day1Temp.append('Temperature: ' + data.list[0].main.temp + '°C')
            day1Image.attr('src', icon1)
            day1Wind.append('Wind: ' + data.list[0].wind.speed + ' m/s')
            day1Humidity.append('Humidity: ' + data.list[0].main.humidity + ' %')

            dateAndTime2.append(data.list[8].dt_txt)
            day2Temp.append('Temperature: ' + data.list[8].main.temp + '°C')
            day2Image.attr('src', icon2)
            day2Wind.append('Wind: ' + data.list[8].wind.speed + ' m/s')
            day2Humidity.append('Humidity: ' + data.list[8].main.humidity + ' %')

            dateAndTime3.append(data.list[16].dt_txt)
            day3Temp.append('Temperature: ' + data.list[16].main.temp + '°C')
            day3Image.attr('src', icon3)
            day3Wind.append('Wind: ' + data.list[16].wind.speed + ' m/s')
            day3Humidity.append('Humidity: ' + data.list[16].main.humidity + ' %')

            dateAndTime4.append(data.list[24].dt_txt)
            day4Temp.append('Temperature: ' + data.list[24].main.temp + '°C')
            day4Image.attr('src', icon4)
            day4Wind.append('Wind: ' + data.list[24].wind.speed + ' m/s')
            day4Humidity.append('Humidity: ' + data.list[24].main.humidity + ' %')

            dateAndTime5.append(data.list[32].dt_txt)
            day5Temp.append('Temperature: ' + data.list[32].main.temp + '°C')
            day5Image.attr('src', icon5)
            day5Wind.append('Wind: ' + data.list[32].wind.speed + ' m/s')
            day5Humidity.append('Humidity: ' + data.list[32].main.humidity + ' %')

            dateAndTime6.append(data.list[39].dt_txt)
            day6Temp.append('Temperature: ' + data.list[39].main.temp + '°C')
            day6Image.attr('src', icon6)
            day6Wind.append('Wind: ' + data.list[39].wind.speed + ' m/s')
            day6Humidity.append('Humidity: ' + data.list[39].main.humidity + ' %')
        })
    }

cityForm.addEventListener('submit', cityName);

