import React from "react";
import { GoogleMap } from '@react-google-maps/api';


const MapError = ({vehicles, center,options,mapContainerStyle}) => {

    const error = () => {
        prompt(vehicles.errors.message)
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