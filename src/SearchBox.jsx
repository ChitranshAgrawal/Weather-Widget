import './SearchBox.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    let [error, setError]= useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="b1a6cc85413234828a74013fb6f59d3e";

    async function getWeatherInfo() {
        try {
            let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            let result = {
                City: city,
                Temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                Humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                Pressure: jsonResponse.main.pressure,
                Country: jsonResponse.sys.country,
                Weather: jsonResponse.weather[0].description,
                windDegree: jsonResponse.wind.deg,
                windSpeed: jsonResponse.wind.speed,
            };

            console.log(result);

            return result;
        } catch(err) {
            throw err;
        }
    }

    function handleCityName(event) {
        setCity(event.target.value);
    }

    async function handleSubmit(event) {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch(err) {
            setError(true);
        }
    }

    return (
        <div className='container' onSubmit={handleSubmit}>
            <div>
                <form className='searchBar'>
                    <TextField
                        id="city"
                        label="Enter City Name"
                        variant="outlined"
                        required
                        value={city}
                        onChange={handleCityName}
                    />
                    <Button variant="contained" type='submit'>Search</Button>

                </form>

                <div className='errorMsg'>
                        {error && <p>
                            <Alert severity="error">
                                <AlertTitle>Error</AlertTitle>
                                There is NO such Place in our API...
                            </Alert>    
                        </p>}
                </div>

            </div>
        </div>
    )
}

