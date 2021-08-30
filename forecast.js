// downloading API informations about weather
async function forecastFunction(){
      const response = await fetch ("https://dataservice.accuweather.com/forecasts/v1/daily/5day/273127?apikey=p70WhDTxJcG0NndfXJuqPEnK41MCULkC&metric=true");
      const json = await response.json( );
      
     let firstDayP= document.querySelector(".firstDayP")
       firstDayP.innerHTML = json.DailyForecasts[0].Day.IconPhrase;

       let secondDayP= document.querySelector(".secondDayP")
       secondDayP.innerHTML = json.DailyForecasts[1].Day.IconPhrase;

       let thirdDayP= document.querySelector(".thirdDayP")
       thirdDayP.innerHTML = json.DailyForecasts[2].Day.IconPhrase;

       let fourthDayP= document.querySelector(".fourthDayP")
       fourthDayP.innerHTML = json.DailyForecasts[3].Day.IconPhrase;
 
  


       //display round temp
       let firstDayTemp= document.querySelector(".first-day-temp")
       firstDayTemp.innerHTML =Math.round(json.DailyForecasts[0].Temperature.Minimum.Value + json.DailyForecasts[0].Temperature.Maximum.Value)/2 +(" °C") ;

       let secondDayTemp= document.querySelector(".second-day-temp")
       secondDayTemp.innerHTML =Math.round(json.DailyForecasts[1].Temperature.Minimum.Value + json.DailyForecasts[1].Temperature.Maximum.Value)/2 +(" °C") ;
       
       let thirdDayTemp= document.querySelector(".third-day-temp")
       thirdDayTemp.innerHTML =Math.round(json.DailyForecasts[2].Temperature.Minimum.Value + json.DailyForecasts[2].Temperature.Maximum.Value)/2 +(" °C") ;

       let fourthDayTemp= document.querySelector(".fourth-day-temp")
       fourthDayTemp.innerHTML =Math.round(json.DailyForecasts[3].Temperature.Minimum.Value + json.DailyForecasts[3].Temperature.Maximum.Value)/2 +(" °C") ;







}
forecastFunction();





let  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let actualDayNumber = new Date().getDay();

new Date().getDay();

document.querySelector(".firstDayForecast").innerHTML =  days[actualDayNumber ];

if(actualDayNumber == 6){
       document.querySelector(".secondDayForecast").innerHTML =  days[0];
}else{
       document.querySelector(".secondDayForecast").innerHTML =  days[actualDayNumber+1]; 
};

if(actualDayNumber== 5){
        document.querySelector(".thirdDayForecast").innerHTML =  days[0];
}else if(actualDayNumber ==6){
       document.querySelector(".thirdDayForecast").innerHTML =  days[1];
}else{
       document.querySelector(".thirdDayForecast").innerHTML =  days[actualDayNumber+2];
}
if(actualDayNumber == 4){
       document.querySelector(".fourthDayForecast").innerHTML =  days[0]
}else if (actualDayNumber == 5){
       document.querySelector(".fourthDayForecast").innerHTML =  days[1]    
}else if (actualDayNumber == 6){
       document.querySelector(".fourthDayForecast").innerHTML =  days[2]       
}else{
       document.querySelector(".fourthDayForecast").innerHTML =  days[actualDayNumber+3]    
}

let weatherIcons = ["⛅️","⛈","🌥","🌩","☁️","🌨","🌦","🌨","🌦","❄️","🌧","☀️","🌤"];

console.log(actualDayNumber);


