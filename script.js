
let Key="cc28cfe09bb4da6a894ee2c65b342201";
let Url ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
let sch = document.querySelector(".search-input");
let sBtn = document.querySelector(".search-btn");
let weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(loc) {
  const response = await fetch(Url + loc + `&appid=${Key}`);

  if (response.status == 404) {
    document.getElementById("error").style.display = "block";
    document.getElementById("w-api").style.display = "none ";
  } else {
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " kmph";
    
  

    switch (data.weather[0].main) {
      case "Clear":
        document.getElementById("w-type").innerHTML="weather is clear";
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-1.svg";
        break;
      case "Clouds":
        document.getElementById("w-type").innerHTML="weather is clouds";
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-7.svg";
        break;
      case "Drizzle":
        document.getElementById("w-type").innerHTML="weather is Drizzel";
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-34.svg";
        break;
      case "Mist":
        document.getElementById("w-type").innerHTML="weather is Mist";
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-17.svg";
        break;
      case "Rain":
        document.getElementById("w-type").innerHTML="weather is rainy";
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-19.svg";
        break;
      case "Snow":
        document.getElementById("w-type").innerHTML="weather is snow";
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-30.svg";
        break;
      case "Thunderstorm":
        document.getElementById("w-type").innerHTML="weather is thunderstorm";
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-15.svg";
        break;
      default:
        document.getElementById("w-type").innerHTML="weather is normal";
        weatherIcon.src =
          "https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png";
    }
  

    document.querySelector(".w-api").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

sBtn.addEventListener("click", () => {
  if(sch.value){
  checkWeather(sch.value);
  }else{
    document.querySelector(".error").style.display = "block";
    document.querySelector(".w-api").style.display = "none";
  }
});