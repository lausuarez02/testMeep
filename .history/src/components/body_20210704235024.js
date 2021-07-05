import React from "react"
import { GoogleMap,useLoadScript,Marker,InfoWindow } from '@react-google-maps/api';
import mapStyles from "./mapStyles";
import "../App.css"
import {Link} from "react-router-dom";

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
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://meep.app/" target="_blank"><img src="https://meep.app/wp-content/uploads/2018/06/Logo-Meep.png" style={{width:"75px"}}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <Link to="/detail" className="nav-link" >Features</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
          <h1> <img style={{width:"70px"}} src="https://meep.app/wp-content/uploads/2018/06/Logo-Meep.png"></img></h1>
          <GoogleMap  mapContainerStyle={mapContainerStyle} zoom={8} center={center} options={options}/> 
        </div>
    )
}

export default Body;
