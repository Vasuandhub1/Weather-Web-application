import React ,{useContext}from 'react'
import bg from "./earth-3d-model-low-poly-animated-max-obj-fbx.jpg"
import temp from "./hot.png"
import "./home.css"
import Search from '../Searchbar/search'
import Usercontext from "../Context/context";
export default function Home() {
  const { input } = useContext(Usercontext);
  const { setinput } = useContext(Usercontext);
  const { city } = useContext(Usercontext);
  const {details}=useContext(Usercontext);
  var degcelcious="searching..."
  var cityname="searching....."
  var min_temperature="searching..."
  var max_temperature="searching..."
  var humidity="Searching..."
  var preassure="Searching...."
  if(city!=null){
    cityname=city.name
    if(details!=null){
      degcelcious=Math.round(details.temp-273)
      min_temperature=Math.round(details.temp_min-273)
      max_temperature=Math.round(details.temp_max-273)
      humidity=details.humidity
      preassure=details.pressure
    }
  }
  return (
    <div>
      <Search/>
      <div className='home-wrapper'>
        <div className='home-content'>
            <div id='data'>
              <h3>City Name : {!cityname ? "Searching...":cityname}</h3>
              <br />
              <hr />
              <h3>Temperature : {!degcelcious?"Searching...":degcelcious}°C</h3>
              <br />
              <hr />
              <h3>MAX_Temp : {!max_temperature?"Searching...":max_temperature}°C</h3>
              <br />
              <hr />
              <h3>MIN_Temp : {!min_temperature?"Searching...":min_temperature}°C</h3>
              <br />
              <hr />
              <h3>Humidity : {!humidity?"Searching...":humidity}%</h3>
              <br />
              <hr />
              <h3>Preassure : {!preassure?"Searching...":preassure}</h3>
              
            </div>
        </div>
      </div>
    </div>
  )
}
