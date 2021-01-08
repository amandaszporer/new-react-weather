import React, { useState } from "react"

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState("celsius");

    function displayFahrenheit(event){
        event.preventDefault();
        setUnit("Fahrenheit");   
    }

    function displayCelsius(event){
        event.preventDefault();
        setUnit("celsius")
    }

    if (unit === "celsius"){
    return(
        <div className="WeatherTemperature">
            <h2>{props.current}<small>°C|<a href="/" onClick={displayFahrenheit}>°F</a></small></h2>
            <h3><strong>{props.max}°C</strong> {props.min}°C</h3>
            <ul>
                <li>Feels Like: {props.feelsLike}°C</li>
                <li>Humidity: {props.humidity}%</li>
                <li>wind: {props.wind} km/h</li>
            </ul>
        </div>)}
        else{
            let fahrenheitCurrent = (props.current *5/9) + 32;
            let fahrenheitMax = (props.max *5/9) + 32;
            let fahrenheitMin = (props.min *5/9) + 32;
            let fahrenheitFeelsLike = (props.feelsLike *5/9) + 32;
            return(
        <div className="WeatherTemperature">
            <h2>{Math.round(fahrenheitCurrent)}<small><a href="/" onClick={displayCelsius}>°C</a>|°F </small></h2>
            <h3><strong>{Math.round(fahrenheitMax)}°F</strong> {Math.round(fahrenheitMin)}°F</h3>
            <ul>
                <li>Feels Like: {Math.round(fahrenheitFeelsLike)}°F</li>
                <li>Humidity: {props.humidity}%</li>
                <li>wind: {props.wind} km/h</li>
            </ul>
        </div>)
        }
        }