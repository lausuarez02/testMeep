import React from "react"
import { GoogleMap,useLoadScript,Marker,InfoWindow } from '@react-google-maps/api';
import mapStyles from "./mapStyles";

const libraries = ["places"]
const mapContainerStyle = {
    height: "100pvh",
    width: "100px",
  };
  const center = {
    lat: 43.6532,
    lng: -79.3832,
  };
  const options ={
      styles: mapStyles,
      disableDefaultUI: true,


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
          <GoogleMap  mapContainerStyle={mapContainerStyle} zoom={8} center={center}/> 
        </div>
    )
}

export default Body;
