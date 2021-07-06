import React,{useState} from "react";
import { GoogleMap,Marker,InfoWindow } from '@react-google-maps/api';


const Map = ({vehicles, center,options,mapContainerStyle}) => {
    const [selected, setSelected] = useState(null) 
    
    
    return(
        <div>


    <GoogleMap  mapContainerStyle={mapContainerStyle} zoom={8} center={center} options={options}>
         {vehicles.map(vehicle => ( <Marker
        key={vehicle.id}
        position={{lat:vehicle.y, lng:vehicle.x}}
        icon={ {    url: `https://meep.app/wp-content/uploads/2018/06/Logo-Meep.png`,
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(15, 15),
        scaledSize: new window.google.maps.Size(30, 30),}}
        onClick={() => {
          setSelected(vehicle);
        }}
        />
      ))}
      {selected ? (
  <InfoWindow 
  position={{lat:selected.y, lng:selected.x}}
  onCloseClick={() => {
    setSelected(null);
  }}

  >
<div className={selected.batteryLevel > 25 ? ("text-success") : ("text-danger")}>
              <h2>
               <img src="https://meep.app/wp-content/uploads/2018/06/Logo-Meep.png" style={{width:"30px"}}/>
                Battery Level: {selected.batteryLevel}
              </h2>
             
            </div>
  </InfoWindow>
      )
    :
    null
}
    
   
            </GoogleMap> 

        </div>
    )
}

export default Map;