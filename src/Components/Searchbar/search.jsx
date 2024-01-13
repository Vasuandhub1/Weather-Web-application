import React, { useContext } from "react";
import "./search.css";
import Usercontext from "../Context/context";
export default function Search() {
  const { input } = useContext(Usercontext);
  const { setinput } = useContext(Usercontext);
  const { city } = useContext(Usercontext);
  const {details}=useContext(Usercontext)
  //
  const handelchange = (event) => {
    setinput(event.target.value);
  };
  if (city != null) {
    console.log(city.name)
    if(details!=null){
      console.log(details.temp)
    }
  } 
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <h1>Weather</h1>
          <input type="text" id="box" value={input} onChange={(event)=>handelchange(event)}/>
        </div>
      </div>
     
    </div>
  );
}
