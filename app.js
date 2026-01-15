const temp = document.getElementById("temp");
const city = document.getElementById("city");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const input = document.getElementById("input");
// const e = document.getElementById("error");

async function weatherDataGet() {
  try {
    const cityName = input.value;
    const resp = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=1f4ee1dd4b6f4d4aaac142934261201&q=${cityName}&aqi=no`
    );
    const data = await resp.json();
    temp.textContent = `${data.current.temp_c}°C`;
    city.textContent = data.location.name;
    humidity.textContent = `${data.current.humidity}%`;
    wind.textContent = `${data.current.wind_kph}Km/h`;
  } catch (e) {
    temp.textContent = "Invalid city name";
    temp.style.color = "rgb(173, 39, 39)";
    temp.style.backgroundColor = "rgb(179, 233, 54)";
  }
}
