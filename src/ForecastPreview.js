import React from "react"
import WeatherIcon from "./WeatherIcon"

export default function ForecastPreview(props){
    return(
        <div className="ForecastPreview col mt-2">
            {new Date(props.data.dt*1000).getHours()}:00
                <WeatherIcon code={props.data.weather[0].icon} />
                {Math.round(props.data.main.temp)}°
        </div>
    )
} 