import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const API_key = "b8bf7f69e6001c16ade11d8120a02f4d";
  const [data, setData] = useState();

  const getData = async () => {
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Novi%20Pazar&units=metric&appid=${API_key}`)
    setData(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="main_container">
      <div className="header">
        <h1 className="header-text">Weather App</h1>
        <input type="text" placeholder="Enter city"/>
        <button>Get weather</button>
      </div>
      <div className="weather-card">
        <h3></h3>
        <p>temp</p>
      </div>
    </div>
  );
}

export default App;
