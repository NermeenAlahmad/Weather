// Day
const d = new Date();

const humidity=document.querySelector('.humidity .value');
const wind=document.querySelector('.wind .value');
const geoLocation=document.querySelector('.geo-location');
const weatherDesc=document.querySelector('.weather-desc');
const weatherTemp=document.querySelector('.weather-temp');
const country =document.querySelector('#country')

  async function getJason(city) {
  const api_url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f69b4e343329866703d95bd629d770dd&units=metric`;
  const respnse = await fetch(api_url);
  const data = await respnse.json();
 console.log(data);
 document.querySelector('.date-dayname').innerHTML=  d.toLocaleString('en-us', {  weekday: 'long' });
 let date =`${d}`.split(' ');
 document.querySelector('.date-day').innerHTML= date[2]+" "+date[1]+" "+date[3];
 humidity.innerHTML=`${data.main.humidity}` + "%";
 wind.innerHTML= `${data.wind.speed}`+ "km/h";
 geoLocation.innerHTML= data.name;
 weatherDesc.innerHTML=data.weather[0].main;
 weatherTemp.innerHTML=data.main.temp;
}
getJason();
country.addEventListener('change', function(){
    getJason(country.value)
})