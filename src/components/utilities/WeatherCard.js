import React from "react";
import "./weatherCardStyle.css";
import loader from '../../assets/loading.jpg'

export default function WeatherCard({
  cityName,
  temp,
  time,
  weather_desc,
  wind_speed,
  precip,
  icon,
  humidity,
}) {
  return (
    <div id="card" className="weather">
      <div style={{ fontWeight: "bold", marginTop: "4px", color: "black" }}>
        {cityName}
      </div>
      <div className="details">
        <div className="temp">
          {temp}
          <span>&deg;</span>C
        </div>
        <div className="right">
          <div id="summary">{weather_desc}</div>
        </div>
      </div>
      <img className="weatherimg" alt="image1" preload="eager" src={icon?(icon):(loader)} />
      <div className="infos">
        <div className="humidity">Humidity {humidity}%</div>
        <div className="windspeed">Wind Speed {wind_speed} km</div>
      </div>
    </div>
  );
}
