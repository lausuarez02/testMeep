import React from "react"
import { GoogleMap,useLoadScript,Marker,InfoWindow } from '@react-google-maps/api';
import mapStyles from "./mapStyles";
import "../App.css"

const libraries = ["places"]
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
    
  

    const { isLoaded, loadError } = useLoadScript({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
      });

    if(loadError) return "error loading maps";
    if(!isLoaded) return "Loading Maps";

    return(
        <div>
          <h1>Meep <img style=src="https://meep.app/wp-content/uploads/2018/06/Logo-Meep.png"></img></h1>
          <GoogleMap  mapContainerStyle={mapContainerStyle} zoom={8} center={center} options={options}/> 
        </div>
    )
}

export default Body;
