var lat
var lon
const form = document.getElementById('myForm');
var weather // data.weather
var cityName //data.city.name




form.addEventListener('submit', (event) => {
  event.preventDefault();

  var input = form.querySelector('#myinput');
  const value = input.value;

  localStorage.setItem('city', value);

  function getApi1() {
    const city = localStorage.getItem('city');
    console.log(city)
    var requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=a803dcd93207387f5f068d610b14840b`;

    fetch(requestUrl)
      .then((response) => response.json())
      .then((data) => {
        lat = data[0].lat
        lon = data[0].lon
         
        getapi2();
        
      });
      
  };

 //function mapApi(){
    
//weather[1].map((i) => {
    //var i = 0
    //function displayApi(Element, className, text){
        
        //var newElement = document.createElement(Element)
        //newElement.className = className

        //newElement.textContent = text
        //document.getElementById('container2').appendChild(newElement)
        //i++

        //console.log(newElement)
        //console.log(weather[1][i])
    //};


 //displayApi('H2', 'city-name', weather[1]);

    

//})

//};

function mapApi() {
  const container = document.getElementById('container2');
  const cityName = weather[0];
  const weatherData = weather[1];

  // Create a heading element for the city name
  const cityHeading = document.createElement('h2');
  cityHeading.className = 'city-name';
  cityHeading.textContent = cityName;
  container.appendChild(cityHeading);

  // Create an element for the current weather conditions
  const currentWeather = document.createElement('p');
  currentWeather.className = 'current-weather';
  currentWeather.textContent = `Current temperature: ${weatherData[0].main.temp}°F, ${weatherData[0].weather[0].description}`;
  container.appendChild(currentWeather);

  // Map the weather data array and create elements for each day
  weatherData.slice(1).map((day) => {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'day';

    const date = document.createElement('p');
    date.className = 'date';
    date.textContent = day.dt_txt;
    dayDiv.appendChild(date);

    const temp = document.createElement('p');
    temp.className = 'temp';
    temp.textContent = `Temperature: ${day.main.temp}°F`;
    dayDiv.appendChild(temp);

    // Add more weather information as needed

    container.appendChild(dayDiv);
  });
};


function getapi2(){
    var requestUrl2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&appid=a803dcd93207387f5f068d610b14840b&units=imperial`

    fetch(requestUrl2)
    .then((response) => response.json())
    .then((data) => {
   
    weather = [data.city.name, data.list];

    console.log(weather)
    mapApi()
    });
    };
    getApi1();
});

console.log(lat,lon);

