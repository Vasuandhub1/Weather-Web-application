import { useEffect, useState } from 'react'
import Search from './Components/Searchbar/search'
import UserContext from './Components/Context/context'
import Main from './Components/main/home'
import './App.css'

function App() {
  const[input,setinput]=useState("")
  const[city,setcity]=useState(null)
  const[details,setdetails]=useState(null)
  var key="06b0779835bd1e6149440583dce99b96"
  var URL=(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}`)

const Weahter= async()=>{
    let response =  await fetch(URL);
    let res=await response.json()
    console.log(res)
    setcity(res) 
    if(city!=null){
      setdetails(res.main)
    }
  }
 useEffect(()=>{
  Weahter()
 },[input])
  return (
    <>
    <UserContext.Provider value={{input,setinput,city,details}}>
     <Main/>
     </UserContext.Provider>
    </>
  )
}

export default App
