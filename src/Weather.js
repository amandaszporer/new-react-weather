import './Weather.css';
import axios from "axios"
import { useState } from "react"
import { Container, Button, Form, Row, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import WeatherData from "./WeatherData"
import WeatherForecast from "./WeatherForecast"

function Weather() {
  let [city, setCity] = useState ("Tel Aviv")
  let [weatherInfo, setweatherInfo] = useState ({loaded:false})

  function search(){
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5245c70173752e9c7a1ea0e23d87c083&&units=metric`;
    axios.get(apiUrl).then(updateWeather)
  }

  function updateCity(event){
  setCity(event.target.value);
  }

  function updateWeather(response){
    setweatherInfo({
      name: response.data.name,
      temperature: Math.round(response.data.main.temp),
      minTemp: Math.round(response.data.main.temp_min),
      maxTemp: Math.round(response.data.main.temp_max),
      feelsLike: Math.round(response.data.main.feels_like),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      loaded: true
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function getLocation(){
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat =  position.coords.latitude;
      let lon =  position.coords.longitude;
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5245c70173752e9c7a1ea0e23d87c083&&units=metric`;
      axios.get(apiUrl).then(updateWeather)
    });
  }
  
  let form = (
    <Form  onSubmit={handleSubmit}>
        <Row>
          <Col>
          
        <Form.Control className="form-input" type="search" onChange={updateCity}/>
        </Col>
        <Col>
        <Button type="submit" variant="btn btn-outline-light" className="search-button">
        🔍
        </Button>
        </Col>
        <Col>
        <Button variant="btn btn-outline-light" className="current-location" onClick={getLocation}> Current Location </Button>
        </Col>
        </Row>
      </Form>)

    let footer = (
      <footer>
        <a href="https://github.com/amandaszporer/new-react-weather" target="_blank" rel="noreferrer" >Open-source code</a> by Amanda Szporer
      </footer>
    )

    if (weatherInfo.loaded) {
      return(
        <div className="Weather">
        {form}
        <WeatherData data={weatherInfo} />
        <WeatherForecast city={weatherInfo.name} />
        {footer}
        </div>
      )
      
    } else {
      search();
      return (
        <div className="Weather">
          <Container>
          {form}
         </Container>
        </div>
      );
      
    }
}

export default Weather;
