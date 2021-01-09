import React, { useState } from "react"
import axios from "axios"
import WeatherIcon from "./WeatherIcon"
import "./WeatherForecast.css"
import ForecastPreview from "./ForecastPreview"

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false)
    let [forecast, setForecast] = useState(null)

    function HandleForecastRespose(response){
        setForecast(response.data);
        setLoaded(true)
    }

    if (loaded && props.city === forecast.city.name){
        return (
            <div className="WeatherForecast row">
                <ForecastPreview data={forecast.list[0]}/>
                <ForecastPreview data={forecast.list[1]}/>
                <ForecastPreview data={forecast.list[2]}/>
                <ForecastPreview data={forecast.list[3]}/>
                <ForecastPreview data={forecast.list[4]}/>
                <ForecastPreview data={forecast.list[5]}/>

            </div>
        )
    } else {
         let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=5245c70173752e9c7a1ea0e23d87c083&&units=metric`;
         axios.get(apiUrl).then(HandleForecastRespose);
        return "Loading..."
    }

}