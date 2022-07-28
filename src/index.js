function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let AmOrPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  let minutes = date.getMinutes();
  let days = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"];
  let day = days[date.getDay()];

  return `Last Updated: ${day} ${hours}:${minutes} ${AmOrPm}`;
}

function displayTemperature(response) {
 // console.log(response.data);
  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);

  document.querySelector("#city");.innerHTML = response.data.name;

  document.querySelector("#description").innerHTML = response.data.weather[0].description;

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;

  document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);

  document.querySelector("#date").innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "64f18b4413b6b44d53aaeab0328413a9";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);
