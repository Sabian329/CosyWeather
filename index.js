// click on pin- display input
let pinIcon = document.querySelector(".weather-icon");
pinIcon.addEventListener("click", () => {
     // document.querySelector(".type-city").style.display = "flex"
     document.querySelector(".type-city").style.visibility = "visible"
     document.querySelector(".type-city").style.opacity = "1"
     document.querySelector(".type-city").style.animation ="slidein 0.5s "
     document.querySelector(".tap").style.display ="none "
});


//click on input- reset input value
let cityInput = document.querySelector(".city-input");
cityInput.addEventListener("click", ()=>{cityInput.value=""})

//click on search - display none for input & button
let searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", ()=>{
     document.querySelector(".type-city").style.visibility = "hidden"
     document.querySelector(".type-city").style.opacity = "0"
     document.querySelector(".type-city").style.animation ="slideout 0.5s "
     document.querySelector(".tap").style.display ="block"
}
     )


let cityNumber = 0
let citiesList = ["Legnica" ,"Lubin", "Wroclaw", "Zlotoryja", "Jawor ", "Kielce" , "Krakow", "Nysa","Lodz","Gdansk", "Kolobrzeg","Gdynia"];



//print citiesList to input list
let citiesPrint = document.querySelector("#cities-input-list");
citiesList.forEach((item)=>{
       let opt = document.createElement("option");
       opt.innerText = item;
       citiesPrint.appendChild(opt);
     });

          cityInput.addEventListener("keyup", function(event) {
          // Number 13 is the "Enter" key on the keyboard
          if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            searchBtn.click();
          }
        });

let darkmodeNav = document.querySelector(".darkmode-nav");
darkmodeNav.addEventListener("mouseover", ()=>{
     document.querySelector(".hiden-darmode-btns").style.display = "block"
})

//hambuurger working
document.addEventListener('click', () => {}); 

// Darkmode by buttons
let actualWeatherSection = document.querySelector("#actual-weather-condytion_id")
let forecastId = document.querySelector("#forecast_id")



const darkLightMode = (bool) =>{
let siteBody = document.querySelector("body");
     if(bool){
     siteBody.style.backgroundImage = "url(images/view.png)"
     actualWeatherSection.classList.remove("actual-weather-condytion-dark"); 
     actualWeatherSection.classList.add("actual-weather-condytion")

     forecastId.classList.remove("forecast-dark"); 
     forecastId.classList.add("forecast")

}else{
    //dark mode
     siteBody.style.backgroundImage = "url(images/view-dark.png)"
     actualWeatherSection.classList.remove("actual-weather-condytion"); 
     actualWeatherSection.classList.add("actual-weather-condytion-dark")
     
     forecastId.classList.remove("forecast"); 
     forecastId.classList.add("forecast-dark")
     
     forecastId.classList.remove("forecast"); 
     forecastId.classList.add("forecast-dark")
}
}




async function weatherFunction(){
      
let cityInput = document.querySelector(".city-input");

city = cityInput.value;
   
 let link = `https://api.openweathermap.org/data/2.5/weather?q= ${city} ,pl&units=metric&appid=750e57bdaec3cc4c8208faae92e8c059`;


       const response = await fetch (link);
     const json = await response.json( );
       
       
      
      let cityName =document.querySelector('header'),
       weatherDescription =document.querySelector(".weather-description")
       temperature =document.querySelector('.city-cord');



 if(city == "" ){
      cityName.innerHTML ="Type your city"
      cityName.style.color ="#ff0000"
 }else if(response.status == 404){
     cityName.innerHTML = "City not found"
      cityName.style.color ="#ff0000"
 }else{
cityName.innerHTML =json.name 
      cityName.style.color ="#ffffff"
 }


      //Add temperature valiue and round
       temperature.innerHTML = Math.round( Number(json.main.temp)) + "°C";
       weatherDescription.innerHTML = json.weather[0].description

//Actual weather condition display 

//pressure
let pressure = document.querySelector(".pressure-value");

pressure.innerHTML = json.main.pressure + " hPa"

//sun
const sunriseFunc = () => {

let sunrise = document.querySelector(".sunrise");

let unix_sunrise = json.sys.sunrise,
date = new Date(unix_sunrise * 1000),
hours = "0" +date.getHours(),
minutes = "0" + date.getMinutes(),
seconds = "0" + date.getSeconds(),
formattedTimeSunrise = hours + ':' + minutes.substr(-2) ;
sunrise.innerHTML = "sunrise "+formattedTimeSunrise

}
sunriseFunc();



const sunsetFunc = () => {
sunset = document.querySelector(".sunset");

let unix_sunset = json.sys.sunset,
date = new Date(unix_sunset * 1000),
hours = date.getHours(),
minutes = "0" + date.getMinutes(),
seconds = "0" + date.getSeconds(),
formattedTimeSunset = hours + ':' + minutes.substr(-2);
sunset.innerHTML ="sunset " +formattedTimeSunset

}
sunsetFunc();


let windSpeed = document.querySelector(".wind-speed"),
windDirection = document.querySelector(".wind-direction");

windSpeed.innerHTML =Math.round( json.wind.speed )+ " m/s"

windDirection.innerHTML = json.wind.deg + " °"


let humidity = document.querySelector(".humidity");

humidity.innerHTML = json.main.humidity + " %"
}

weatherFunction();







