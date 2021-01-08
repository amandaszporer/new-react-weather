import React from "react"
import DateTime from "./DateTime"
import { Row, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import WeatherIcon from "./WeatherIcon"
import WeatherTemperature from "./WeatherTemperature"

export default function WeatherData(props){
    return(
        <div className="WeatherData">
            <h1>{props.data.name}</h1>
        <p className="ml-3 date"> <DateTime date={props.data.date}/></p>
        <Row>
        <Col>
        <p className="ml-2 description"> {props.data.description} </p>
         <WeatherIcon code={props.data.icon}/>
  
        </Col>
        <Col>
        <WeatherTemperature current={props.data.temperature} max={props.data.maxTemp} min={props.data.minTemp} feelsLike={props.data.feelsLike} humidity={props.data.humidity} wind={props.data.wind}/>
        
        </Col>
        </Row>

        </div>
    )
}
