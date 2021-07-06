import React, {useEffect, useState} from "react"

import {useLoadScript } from '@react-google-maps/api';

import "../App.css";

import mapStyles from "./mapStyles"

//importing components
import NavBar from "./navBar";
import Map from "./map";
import MapError from "./mapError"




const libraries = ["places"]

//mapStyle
const mapContainerStyle = {
    height: "100vh",
    width: "100vw",
  };
  const center = {
    lat: 38.7223,
    lng: -9.1393,
  };
  const options ={
      styles: mapStyles,
      disableDefaultUI: true,
      zoomControl: true



  }
const Body = () => {
  const [state, setState] = useState([])



 //Api call
  useEffect(() => {
    fetch("https://apidev.meep.me/tripplan/api/v1/routers/lisboa/resources?")
    .then(response => response.json())
    .then(data => setState(data))
  },[])

  


  //Limit to 200 objects

  var vehicles = []
   if(state.id){
    vehicles = state.slice(0,200)
   }

   //error from the api

//another type of error



   
  
//Load 
    const { isLoaded, loadError } = useLoadScript({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
      });

    if(loadError) return "Error loading maps";
    if(!isLoaded) return "Loading Maps";

 
    

    return(
        <div>

          {/*Nav Bar */}
          
          <NavBar/>


      {/* Start of Google map and finish of navBar*/}
      <div>
        {vehicles.id ? (
 <Map vehicles={vehicles} mapContainerStyle={mapContainerStyle} center={center} options={options}/>
        ) 
        
        :
        
        (
          <MapError vehicles={vehicles} mapContainerStyle={mapContainerStyle} center={center} options={options}/>
        )}
       
      
      </div>
        </div>
    )
}

export default Body;
