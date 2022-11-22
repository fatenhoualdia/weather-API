import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchWeather = ({data, searchCountry}) => {
  const [search, setSearch] = useState("")
    const handleSubmit = (e) => { 
e.preventDefault()
searchCountry(search)
setSearch("")
    }
 const getDayName=(date = new Date(), locale = 'en-US')=> {
      return date.toLocaleDateString(locale, {weekday: 'long'});
    }

  return (
<div>
  <h2> My Weather App </h2>
  <div className="weather">
    <div className="weather__hero">
      <div className="weather__hero__place">
        <span><i className="material-icons">place</i>{`${data.location.name} | ${data.location.tz_id}`}</span>
        <form onSubmit={handleSubmit}> 
                  <div className="input-group mb-4 w-75 mx-auto">
                    <input
                    onChange={(e)=>setSearch(e.target.value)}

                      type="search"
                      className="form-control"
                      placeholder="search city"
                      aria-label="search city"
                      aria-describedby="basic-addon2"
                    />
                    <button typeof="submit" className="input-group-text" id="basic-addon2">
                        <i className="fas fa-search"/>
                    </button>
                  </div>
                </form>

      </div>
      <div className="weather__hero__time" />
      <div className="weather__hero__info"><span><i className="wi wi-day-sunny" />Wetaher Status Now</span> <br/>  <h6 style={{margin:"10px 0 0 -5px", color:"white"}}> <span style={{color:"gray"}}>Today:</span> {data.current.last_updated}</h6></div>
      <div className="weather__hero__image">

      </div>
    </div>
    <div className="weather__stats">
      <div className="weather__stats__today">
        <div className="weather__stats__today__degree">
        <span className="badge">Current Weather</span>
          <span className="degree">{`${data.current.temp_c}°C`}</span>
          <span style={{ textDecoration:"overline"}} >{`${data.current.temp_f}°F`}</span>
          
         
        </div>
       
        <div className="weather__stats__today__icon">
          <i className="wi wi-night-sleet" />
        </div>
      </div>
      <div className="vl"></div>
      <div className="weather__stats__otherdays">
         <div>
          <Link to={`/forcast/${data.forecast.forecastday[0].date_epoch}`}><span className="badge">{getDayName(new Date(data.forecast.forecastday[0].date))}</span></Link> 
          <span className="icon"><i className="wi wi-day-cloudy-high" /></span>
          <span className="degree">{data.forecast.forecastday[0].day.avgtemp_c}&deg;C</span>
        </div>
        <div> 
        <Link to={`/forcast/${data.forecast.forecastday[1].date_epoch}`}><span className="badge">{getDayName(new Date(data.forecast.forecastday[1].date))}</span></Link> 
          <span className="icon"><i className="wi wi-day-cloudy-high" /></span>
          <span className="degree">{data.forecast.forecastday[1].day.avgtemp_c}&deg;C</span>
        </div>
        <div>
        <Link to={`/forcast/${data.forecast.forecastday[2].date_epoch}`}><span className="badge">{getDayName(new Date(data.forecast.forecastday[2].date))}</span></Link>
          <span className="icon"><i className="wi wi-day-cloudy-high" /></span>
          <span className="degree">{data.forecast.forecastday[2].day.avgtemp_c}&deg;C</span>
        </div>
      </div>
    </div>
  </div>
</div>


  );
};

export default SearchWeather;
