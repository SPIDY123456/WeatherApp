import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import './weather.css';

function Weather() {

  const [weather, setWeather] = useState([])

  
     const [form, setForm] = useState({
      city:"",
      country:""
     });

  const APIKEY = "ea0420543e51788aa0512e1b2027f991";
    

     async function weatherData(e){
      e.preventDefault();
      if(form.city === ""){
        alert("Add Values");
      }else{
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`
        ).then((res) => res.json())
        .then((data) => data);
        setWeather({data: data})
      

      }
      }
     
     const handlechange = (e) => {
      let name = e.target.name;
      let value = e.target.value;

      if(name ==="city"){
        setForm({...form,city:value})
      }
        if(name === "country"){
          setForm({...form,country:value})
        }
        

      }
    return (
        <div className = "Weather">
            <span className= "title"> Weather App</span>
            <br/>
          <form> 
            <input type = "text" name = "city" placeholder="city" onChange={(e) =>handlechange(e)} />
                &nbsp; &nbsp;&nbsp;&nbsp;
          <input type="text" name="country" placeholder="country" onChange={(e) => handlechange(e)} />
               <button className = "getWeather" onClick={(e) => weatherData(e)}>
                Submit </button>
            
          </form>

          {
            weather.data !== undefined ?  (
            <div>
              <DisplayWeather data = {weather.data} />
        
        </div>
            ): null}
            </div>
)
     } ;

export default Weather;