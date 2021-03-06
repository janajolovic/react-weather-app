import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const API_key = "b8bf7f69e6001c16ade11d8120a02f4d";
  const [data, setData] = useState({});
  const [city, setCity] = useState("Novi Pazar");

  const getData = async () => {
    try {
      let response = await axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_key}`)
        setData(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    const inputHandler = (e) => {
      e.preventDefault();
      setCity(e.target.value);
    }

    const getCity = () => {
      getData();
      setCity("");
    }
    
    useEffect(() => {
      getData()
    }, [])
    
    return (
      <div className="main_container">
      <div className="header">
        <h1 className="header-text">Weather App</h1>
        <input type="text" placeholder="Enter city" value={city} name={city} onChange={(e) => {inputHandler(e)}}/>
        <button onClick={() => {getCity()}}>Get weather</button>
      </div>
      <div className="weather-card">
        <h3>{data.name}, {data.sys.country}</h3>
        <h1>{parseInt(data.main.temp)}°C</h1>
        <div className='img-desc'>
          <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}></img>
          <p>{data.weather[0].description}</p>
        </div>
        <p>Humidity: {data.main.humidity}</p>
        <p>Wind: {data.wind.speed}</p>
      </div>
    </div>
  );
}

export default App;
