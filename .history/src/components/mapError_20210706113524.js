import React from "react";
import { GoogleMap } from '@react-google-maps/api';


const MapError = ({vehicles, center,options,mapContainerStyle}) => {

    const error = () => {
        if(vehicles.errors){
            prompt(vehicles.errors.message)
        }else{
            prompt("There is an Error! We are trying to fix it")
        }
        
    }
    return(
        <div>
       <GoogleMap  mapContainerStyle={mapContainerStyle} zoom={8} center={center} options={options}>
           {error}

       </GoogleMap>
        </div>
    )
}

export default MapError;