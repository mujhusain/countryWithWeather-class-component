import "./weatherCardStyle.css";
import loader from '../../assets/loading.jpg'

import React, { Component } from 'react'

export default class WeatherCard extends Component {
  
  render() {
    return (
      <div id="card" className="weather">
      <div style={{ fontWeight: "bold", marginTop: "4px", color: "black" }}>
        {this.props.cityName}
      </div>
      <div className="details">
        <div className="temp">
          {this.props.temp}
          <span>&deg;</span>C
        </div>
        <div className="right">
          <div id="summary">{this.props.weather_desc}</div>
        </div>
      </div>
      <img className="weatherimg" alt="image1" preload="eager" src={this.props.icon?(this.props.icon):(loader)} />
      <div className="infos">
        <div className="humidity">Humidity {this.props.humidity}%</div>
        <div className="windspeed">Wind Speed {this.props.wind_speed} km</div>
      </div>
    </div>
    )
  }
}