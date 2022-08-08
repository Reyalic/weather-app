import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {

 const [coords, setCoords] = useState()


 useEffect(()=>{

  const success = pos =>{

    const latlon={
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setCoords(latlon)
  }
  navigator.geolocation.getCurrentPosition(success)

 },[])


  return (
    <div  className="App"> 
      <Card coords={coords} />
    </div>
  )
}

export default App