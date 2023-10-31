// Starting main city
const featuredCity = "Folsom";
var time = document.getElementsByClassName("dateTime")[0].innerText = dayjs().format("MMMM-DD-YYYY");
console.log(time);

// Selectors to connect js variables to html elements
const inputField = document.querySelector('#textarea1');
const inputSubmit = document.querySelector('#mainSubBtn');
console.log(inputSubmit);
console.log(inputField);
// const timeDisplay =
const five_City_Display = document.querySelector('.five-city-choices');
// How do I display 5 cities in the field?
const city = document.querySelector('.city-name');
const currentWeather = document.querySelector('.current-weather');
const temperature = document.querySelector('.temp');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const fiveDayForcast = document.querySelector('#five_Day_forcast');

// 5 children <a> after // 5 day forcast
const apiKey = "bb11cdc41470104402fb8d1fbc623287";

// Event listener

inputSubmit.addEventListener('click', function(e) {
    console.log(inputSubmit);
    e.preventDefault();
   const url = 'https://api.openweathermap.org/data/2.5/weather?q='+inputField.value+'&appid='+apiKey;
    fetch(url)
    .then(function (response){
        return response.json();
    })
    //.then(data => console.log(data))
    .then(function (data) {
      // collect info from API Key and store it locally
      const cityInputValue = data['name'];
      const weatherApiDetails = data['weather'][0]['description'];
      const currentTemp = data['main']['temp'];
      const windSpeed = data['wind']['speed'];
      const forcast = "https://api.openweathermap.org/data/2.5/forecast?lat=38.6780&lon=121.1761&appid=" + apiKey;
      console.log(data);
      console.log(forcast);
      // use innerHTML to display API response
      city.innerHTML = `Current Weather in <span>${cityInputValue}<span>`;
      temperature.innerHTML = `Current Temperature: <span>${currentTemp} F<span>`;
     currentWeather.innerHTML = `Current Sky Conditions: <span>${weatherApiDetails}<span>`;
      wind.innerHTML = `Current Wind Speed: <span>${windSpeed}mph<span>`;
      fiveDayForcast.innerHTML = `FIVE DAY FORCAST:<span>${forcast.data}<span>`;
    })
    // condition to show an error if input for city name is incorrect
    .catch(err => inputField.innerText = `Wrong City Name Try Again`);
})
; 















// /*starting main city
// const featuredCity = "Folsom";
// var time = document.getElementsByClassName("dateTime").innerText =
// dayjs().format("MMMM-DD-YYYY");
// console.log(time);
// // Selectors to connect js variables to html elements

// const inputField = document.querySelector('.input-field');
// const inputSubmit = document.querySelector('#mainSubBtn');
// console.log(inputSubmit);
// //const timeDisplay = 
// const five_City_Display = document.querySelector('five-city-choices'); // How do i display 5 cities in the field?
// const city = document.querySelector('city-name');
// const currentWeather = document.querySelector('current-weather');
// const temperature = document.querySelector('temp');
// const wind = document.querySelector('wind');
// const humidity = document.querySelector('humidity');
// const fiveDayForcast = document.querySelector('#five_Day_forcast'); // 5 children <a> after
// // 5 day forcast



// const apiKey = "bb11cdc41470104402fb8d1fbc623287";

// //Event listener
// inputSubmit.addEventListener('click', function() {
//     fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputField.value+'&appid='+apiKey)
//     .then(res => res.json())
//     //.then(data => console.log(data))
//     .then(data => {
// // collect info from API Key and store it locally 
//     const cityInputValue = data['name'];  
//     const weatherApiDetails = data['weather'][0]['description'];    
//     const currentTemp = data['main']['temp']; 
//     const windSpeed = data['main']['speed'];
// console.log(windSpeed)
// // use innerHTML to display API response
//    city.innerHTML = `Current Weather in <span>${cityInputValue}<span>`;
//    temperature.innerHTML = `Current Temperature: <span>${currentTemp} F<span>`;
//    currentWeather.innerHTML = `Current Sky Conditions: <span>${weatherApiDetails}<span>`;
//    wind.innerHTML = `Current Wind Speed: <span>${windSpeed}mph<span>`

//     })
// // condition to shpw an error if input for city name is incorrect
// .catch(err => inputField.innerText = `Wrong City Name Try Again`);

// })




// // Weather API variables

// //const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Folsom&limit=5";

// //async function showWeather() {
//   // const response = await fetch(apiUrl + `&appid={apikey}`);
//    //var data = await response.json();

// //console.log(data);

// //}

// //showWeather(); 





