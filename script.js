const url = 'https://api.openweathermap.org/data/2.5/';
const key = '8e5d5db36629b2b21cbf8b8f662a15d0';

const setQuery = (e) => {
  if (e.keyCode == '13') {
    getResult(input.value);
  }
};

const getResult = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=de`;
  fetch(query)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector('.temp').innerHTML =
        Math.round(data.main.temp) + '°c';
      document.querySelector('.city').innerHTML =
        data.name + ', ' + data.sys.country;
      document.querySelector('.desc').innerHTML = data.weather[0].description;
      document.querySelector('.minmax').innerHTML =
        Math.round(data.main.temp_min) +
        '°c / ' +
        Math.round(data.main.temp_max) +
        '°c';
    })
    .catch((err) => {
      alert('Böyle bir şehir yok!');
    });
};

const input = document.querySelector('#input');
input.addEventListener('keypress', setQuery);
