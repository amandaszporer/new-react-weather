import React from "react"
import DateTime from "./DateTime"
import { Row, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import WeatherIcon from "./WeatherIcon"

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
        <h2>{props.data.temperature}°C</h2>
        <h3><strong>{props.data.maxTemp}°C</strong> {props.data.minTemp}°C</h3>
        <ul>
          <li>Feels Like: {props.data.feelsLike}°C</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>wind: {props.data.wind} km/h</li>
        </ul>
        </Col>
        </Row>

        </div>
    )
}
