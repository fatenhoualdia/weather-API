import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./Forcast.css"
import { useSelector } from 'react-redux';
const Forcast = () => {
  const {id}= useParams()
  console.log(id)
const weather = useSelector(state=>state.weather.forecast.forecastday.find(el=> el.date_epoch === +id));
console.log(weather)
const getDayName=(date = new Date(), locale = 'en-US')=> {
  return date.toLocaleDateString(locale, {weekday: 'long'});
}
const [select, setSelect] = useState("")

  return (
<div className="wrapper">
  <div className="widget-container">
    <div className="top-left">
      <h1 className="city" id="city">Today is</h1>
      <h3 id="date">{`${getDayName(new Date(weather.date))}, ${weather.date}`}</h3>
      <div style={{marginTop:"10px", color:"white"}} className="cont">
      <div className="other-details-key">
        <p>Wind Speed</p>
        <p>Humidity</p>
        <p>temperature</p>
  
      </div>
      <div className="other-details-values">
        <p className="windspeed">{weather.day.maxwind_mph} Km/h</p>
        <p className="humidity">{weather.day.avghumidity} %</p>
        <p className="temperature">{weather.day.avgtemp_c}°C</p>
    
      </div>
    </div>
 
  
      {/*       <a target="_blank" href="https://codepen.io/myleschuahiock/"><p id="codepen-link">codepen.io/myleschuahiock</p></a> */}
      <p className="geo" />
    </div>
    <div className="top-right">
    
    <select className='box' onChange={(e)=>setSelect(e.target.value)}>
    <option value="0">01.00AM</option>
    <option value="1">02.00AM</option>
    <option value="2">03.00AM</option>
    <option value="3">04.00AM</option>
    <option value="4">05.00AM</option>
    <option value="5">06.00AM</option>
    <option value="6">07.00AM</option>
    <option value="7">08.00AM</option>
    <option value="8">09.00AM</option>
    <option value="9">10.00AM</option>
    <option value="10">11.00AM</option>
    <option value="11">12.00AM</option>
    <option value="12">01.00PM</option>
    <option value="13">02.00PM</option>
    <option value="14">03.00PM</option>
    <option value="15">04.00PM</option>
    <option value="16">05.00PM</option>
    <option value="17">06.00PM</option>
    <option value="18">07.00PM</option>
    <option value="19">08.00PM</option>
    <option value="20">09.00PM</option>
    <option value="21">10.00PM</option>
    <option value="22">11.00PM</option>
    <option value="23">12.00PM</option>
</select>  
<Link to="/"><button className="btn1">Home</button></Link> 

      <h1 id="weather-status">Weather / Weather Status</h1>
      <img className="weather-icon" src= {weather.hour[+select].condition.icon} alt=""/>
    </div>
   
    <div className="horizontal-half-divider" />
    
    <div className="bottom-left">
   
      <h1 id="temperature">{weather.hour[+select].temp_c}</h1>
      <h2 id="celsius">°C</h2>
    </div>
    <div className="vertical-half-divider" />
    <div className="bottom-right">
      <div className="other-details-key">
        <p>Wind Speed</p>
        <p>Humidity</p>
        <p>Pressure</p>
      </div>
      
      
      
      <div className="other-details-values">
        <p className="windspeed">{weather.hour[+select].wind_mph} Km/h</p>
        <p className="humidity">{weather.hour[+select].humidity} %</p>
        <p className="pressure">{weather.hour[+select].pressure_in} hPa</p>
    
      </div>
    </div>
  </div>
 <p className="watermark">GOMYCODE FATEN KHOUALDIA</p>
</div>


  )
}

export default Forcast