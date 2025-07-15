import { useState } from "react"
import axios from "axios"



function Weather()

{
    const[city,setcity]=useState("")

    const[weather,setweather]=useState("")
    const[temp,settemp]=useState("")
    const[desc,setdesc]=useState("")

        function handleCity(eve)
        {
            setcity(eve.target.value)
        }
    
        function getWeather(){
            var weatherData=axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=725d2f1d8a700b341c2870ba9a1ad306`)
            weatherData.then(function(success){
                console.log(success.data)
                setweather(success.data.weather[0].main)
                settemp(success.data.main.temp)
                setdesc(success.data.weather[0].description)
            })
        }
    return(

        <>
        <div className="full-container" >
            <div className="container">
                <h1>Weather Report</h1>
                <p>I can give you a weather report about your city !</p>
                <input onChange={handleCity} type="text" /><br></br><br></br>
                <button onClick={getWeather}>Get Report</button>
                <br></br>
                <h3>Weather:{weather}</h3>
                <h3>Temperature:{temp}</h3>
                <h3>Description:{desc}</h3>
            </div>
        </div>
        </>

    )
}

export default Weather


