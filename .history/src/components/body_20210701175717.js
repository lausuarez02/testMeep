import React from "react"
import { GoogleMap,useLoadScript,Marker,InfoWindow } from '@react-google-maps/api';


const libraries = ["places"]
const mapContainerStyle = {
    height: "100vh",
    width: "100vw",
  };
const center = {
    lat:40.403341,
    lon:-3.689707
}

const Body = () => {
    
  

    const {isLoaded, loadError} = useLoadScript({
        
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, 
        libraries,
    })

    if(loadError) return "error loading maps";
    if(!isLoaded) return "Loading Maps";

    return(
        <div>
          <GoogleMap  mapContainerStyle={mapContainerStyle} zoom={8} center={center}/> 
        </div>
    )
}

export default Body;
