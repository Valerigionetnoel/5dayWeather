// dayjs.extend(window.dayjs_plugin_utc);
// dayjs.extend(window.dayjs_plugin_timezone);

var date1 = dayjs().format('MM/DD/YYYY');
var date2 = dayjs().add(1, 'day').format('MM/DD/YYYY')
var date3 = dayjs().add(2, 'day').format('MM/DD/YYYY')
var date4 = dayjs().add(3, 'day').format('MM/DD/YYYY')
var date5 = dayjs().add(4, 'day').format('MM/DD/YYYY')
var date6 = dayjs().add(5, 'day').format('MM/DD/YYYY')

var cityEl = document.querySelector('#City')
var cityForm = document.querySelector('#cityForm')
// var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=1a94d023f0ce6163537e0b2fd1efff1c'

var oldSearch = $('#old-search')

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
    } else {
        alert('Enter valid city')
    }

    var cityList = JSON.parse(localStorage.getItem("cityList")) || [];
    cityList.push(city);
    localStorage.setItem("cityList", JSON.stringify(cityList));
    
    var button = document.createElement('button')
    for (var i = 0; i < cityList.length; i++){
        $(oldSearch).append(button)
        $(button)
        .html(cityList[i])
        .on('click', function(e){
            let newCity = e.target.innerHTML;
            getCityName(newCity)
        })
    }
}
var getCityName = function (myCity){
    if (cityEl.value === ''){
        var apiUrl = 
        'https://api.openweathermap.org/data/2.5/forecast?q='
         + myCity + 
          '&appid=1a94d023f0ce6163537e0b2fd1efff1c' +
           '&units=metric';
    } else {  
    var apiUrl = 
    'https://api.openweathermap.org/data/2.5/forecast?q=' + 
    myCity + 
    '&appid=1a94d023f0ce6163537e0b2fd1efff1c' + 
    '&units=metric'; 
}

    // localStorage.setItem('Cities', myCity)
    // var button = document.createElement('button')
    // $(oldSearch).append(button)
    // $(button).html(myCity).on('click', getCityName)

    fetch (apiUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            // console.log(data.list)
            // for (var i = 0; i < data.list.length; i = i + 8){
                //Remeber to add 8 to the [] to jump a day
                icon1 = 'http://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@2x.png'
                icon2 = 'http://openweathermap.org/img/wn/' + data.list[7].weather[0].icon + '@2x.png'
                icon3 = 'http://openweathermap.org/img/wn/' + data.list[15].weather[0].icon + '@2x.png'
                icon4 = 'http://openweathermap.org/img/wn/' + data.list[23].weather[0].icon + '@2x.png'
                icon5 = 'http://openweathermap.org/img/wn/' + data.list[31].weather[0].icon + '@2x.png'
                icon6 = 'http://openweathermap.org/img/wn/' + data.list[39].weather[0].icon + '@2x.png'
                // console.log(data.list[i])
                // console.log(data.list[i].main.temp)
                // console.log(data.list[i].wind.speed)
                // console.log(data.list[i].main.humidity)
                // console.log(icon1)
                // console.log(data.list[i].dt_txt)
                // console.log(date1)
                
            // }

            dateAndTime1.html('');
            dateAndTime1.append(myCity + ' ' + date1)
            day1Temp.html('')
            day1Temp.append('Temperature: ' + data.list[0].main.temp + '°C')
            day1Image.html('')
            day1Image.attr('src', icon1)
            day1Wind.html('')
            day1Wind.append('Wind: ' + data.list[0].wind.speed + ' km/h')
            day1Humidity.html('')
            day1Humidity.append('Humidity: ' + data.list[0].main.humidity + ' %')

            dateAndTime2.html('');
            dateAndTime2.append(date2)
            day2Temp.html('')
            day2Temp.append('Temperature: ' + data.list[7].main.temp + '°C')
            day2Image.html('')
            day2Image.attr('src', icon2)
            day2Wind.html('')
            day2Wind.append('Wind: ' + data.list[7].wind.speed + ' km/h')
            day2Humidity.html('')
            day2Humidity.append('Humidity: ' + data.list[7].main.humidity + ' %')

            dateAndTime3.html('');
            dateAndTime3.append(date3)
            day3Temp.html('')
            day3Temp.append('Temperature: ' + data.list[15].main.temp + '°C')
            day3Image.html('')
            day3Image.attr('src', icon3)
            day3Wind.html('')
            day3Wind.append('Wind: ' + data.list[15].wind.speed + ' km/h')
            day3Humidity.html('')
            day3Humidity.append('Humidity: ' + data.list[15].main.humidity + ' %')

            dateAndTime4.html('');
            dateAndTime4.append(date4)
            day4Temp.html('')
            day4Temp.append('Temperature: ' + data.list[23].main.temp + '°C')
            day4Image.html('')
            day4Image.attr('src', icon4)
            day4Wind.html('')
            day4Wind.append('Wind: ' + data.list[23].wind.speed + ' km/h')
            day4Humidity.html('')
            day4Humidity.append('Humidity: ' + data.list[23].main.humidity + ' %')

            dateAndTime5.html('');
            dateAndTime5.append(date5)
            day5Temp.html('')
            day5Temp.append('Temperature: ' + data.list[31].main.temp + '°C')
            day5Image.html('')
            day5Image.attr('src', icon5)
            day5Wind.html('')
            day5Wind.append('Wind: ' + data.list[31].wind.speed + ' km/h')
            day5Humidity.html('')
            day5Humidity.append('Humidity: ' + data.list[31].main.humidity + ' %')

            dateAndTime6.html('');
            dateAndTime6.append(date6)
            day6Temp.html('')
            day6Temp.append('Temperature: ' + data.list[39].main.temp + '°C')
            day6Image.html('')
            day6Image.attr('src', icon6)
            day6Wind.html('')
            day6Wind.append('Wind: ' + data.list[39].wind.speed + ' km/h')
            day6Humidity.html('')
            day6Humidity.append('Humidity: ' + data.list[39].main.humidity + ' %')

            // cityEl.value = '';
        })
    }

cityForm.addEventListener('submit', cityName);

var cityList = JSON.parse(localStorage.getItem("cityList")) || [];
    for (var i = 0; i < cityList.length; i++){
        var button = document.createElement('button')
        $(oldSearch).append(button)
        $(button).html(cityList[i]).on('click', function(e){
            let newCity = e.target.innerHTML;
            getCityName(newCity);
        })
    }
