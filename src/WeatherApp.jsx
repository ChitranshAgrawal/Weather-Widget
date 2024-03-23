import './WeatherApp.css';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp() {

    let [weatherInfo, setWeatherInfo] = useState({
        City: "Surat",
        Country: "IN",
        Humidity: 33,
        Pressure: 1010,
        Temp: 31.99,
        Weather: "haze",
        feelsLike: 31.18,
        tempMax: 31.99,
        tempMin: 31.99,
        windDegree: 260,
        windSpeed: 3.09,
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div className="main">
            <h1>Weather Widget using React JS</h1>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}

