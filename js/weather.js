const API_KEY = '9bf27b722a4c81ce52cf829f5f5eae52';
const weather = document.querySelector('#weather span:first-child');
const city = document.querySelector('#weather span:last-child');

const onGeoOk = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
};

const onGeoError = () => {
  alert("Can't find you. No weather for you.");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
