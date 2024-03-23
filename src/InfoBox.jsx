import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css';

export default function InfoBox({ info }) {

    const INIT_URL = "https://images.unsplash.com/photo-1423209086112-cf2c8acd502f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1457269449834-928af64c684d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ludGVyfGVufDB8fDB8fHww";
    const RAIN_URL = "https://images.unsplash.com/photo-1620385019253-b051a26048ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhaW58ZW58MHx8MHx8fDA%3D";

    return (
        <div className='InfoBox'>
            <Card sx={{ maxWidth: 345 }} className='infoCard'>

                <CardMedia
                    sx={{ height: 140 }}
                    image={info.Humidity > 60 ? RAIN_URL : info.Temp > 25 ? HOT_URL : COLD_URL}
                    title="Weather"
                />

                <CardContent>

                    <Typography gutterBottom variant="h5" component="div">
                        {info.City} &nbsp;
                        {info.Humidity > 60 ? <ThunderstormIcon/> : info.Temp > 25 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature = {info.Temp}&deg;C</p>
                        <p>Feels Like = {info.feelsLike}</p>
                        <p>Humidity = {info.Humidity}</p>
                        <p>Weather = {info.Weather}</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>Pressure = {info.Pressure}</p>
                        <p>Wind Degree = {info.windDegree}</p>
                        <p>Wind Speed = {info.windSpeed}</p>
                    </Typography>

                </CardContent>

            </Card>

        </div>
    )
}

