import React from "react"
import { GoogleMap,useLoadScript,Marker,InfoWindow } from '@react-google-maps/api';


const libraries = ["places"]

const center = {
    lat:40.403341,
    lon:-3.689707
}

const Body = () => {
    
  

    const { isLoaded, loadError } = useLoadScript({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyB4LX5_ahLddlpB9R1ifxJKvnUSNSM6kyg",
        libraries,
      });

    if(loadError) return "error loading maps";
    if(!isLoaded) return "Loading Maps";

    return(
        <div>
          <GoogleMap zoom={8} center={center}/> 
        </div>
    )
}

export default Body;
