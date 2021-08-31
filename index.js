document.addEventListener('click', () => {}); 


let cityNumber = 0

async function weatherFunction(){

       let citiesList = ["Legnica" ,"Lubin", "Wroclaw", "Zlotoryja", "Jawor ", "Kielce" , "Krakow", "Nysa","Lodz","Gdansk", "Kolobrzeg","Gdynia"].sort();
      
    


let citiesPrint = document.querySelector(".cities-print");

       citiesList.forEach((item)=>{
              let li = document.createElement("li");
              li.innerText = item;
              citiesPrint.appendChild(li);
              li.classList.add("cities-names-li");
            })


let singleCity = document.querySelector(".cities-print li");

console.log(singleCity.textContent);

singleCity.style.backgroundColor = "black";



let citiesPrintSelect = document.querySelector(".cities-print-selector")

       citiesPrintSelect.addEventListener("mouseover", ()=>{citiesPrint.style.display = "block"});

              citiesPrintSelect.addEventListener("mouseout", ()=>{citiesPrint.style.display = "none"});

              

 let link = "https://api.openweathermap.org/data/2.5/weather?q="+ citiesList[cityNumber] +" ,pl&units=metric&appid=750e57bdaec3cc4c8208faae92e8c059";


       const response = await fetch (link);
      const json = await response.json( );
      
      
      let cityName =document.querySelector('header'),
     weatherDescription =document.querySelector(".weather-description")
       temperature =document.querySelector('.city-cord');

      // Add city name
 cityName.innerHTML =json.name 


      //Add temperature valiue and round
       temperature.innerHTML = Math.round( Number(json.main.temp)) + "°C";
       weatherDescription.innerHTML = json.weather[0].description
       console.log("reload")

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
console.log(formattedTimeSunrise);

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
console.log(formattedTimeSunset);

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
// setInterval(() => {weatherFunction()}, 20000); 



//Darkmode function is turning on after 8 o'clock

const timeFunction = () =>{
 let body = document.querySelector("body");     
 var today = new Date();
var time = today.getHours()
     
// if(time>19){
//              body.style.backgroundImage = " url('images/evening-darkmode.png')"
//       }else{
//              body.style.backgroundImage = " url('images/evening.png')"  
//       }

}
timeFunction();
setInterval(() => {timeFunction()}, 6000000); 

function   changeCityFunc(){
       let a 
       a = a+1
return a
}






