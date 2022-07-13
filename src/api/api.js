import axios from 'axios';
export const getCountryDetails=(countryName)=>axios.get(`https://restcountries.com/v3.1/name/${countryName}`);


export const getWeatherData=(cityName)=>axios.get(`http://api.weatherstack.com/current?access_key=ed0e040ed912e79cc7a97132dd3fe27f&query=${cityName}`);