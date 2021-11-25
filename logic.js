const apiKey="160b50d90ed4c9b3c46b7968d182aeaf";
const temperature=document.querySelector('.temp')
const city=document.querySelector('.city')
const desc=document.querySelector('.description')
const humid=document.querySelector('.humidity')
const wind=document.querySelector('.wind')
// const cityname="Gwalior"
// console.log(`hello this is ${apiKey}`)

fetching('gwalior')  // By default

const search = document.querySelector('input') 
search.addEventListener('change', (e) => { 
      
     fetching(e.target.value)
});
function fetching(cityname){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${apiKey}`)
.then((response)=>response.json())
.then((data)=>disp(data));



function disp(data)
{
   const{name}=data;
   const{icon,description}=data.weather[0];
   const{temp,humidity}=data.main;
   const{speed}=data.wind;
   console.log(temp);

   city.innerText=`Weather in ${name}`;
   temperature.innerText=`${temp}°C`;
   wind.innerText= `Wind Speed ${speed}Km/ph`
   humid.innerText=`Humidity ${humidity}`
   desc.innerText= description

  
}}







