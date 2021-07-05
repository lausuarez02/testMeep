import React , {useState,useEffect} from "react";
import {Link} from "react-router-dom"
import Pagination from "./pagination";

const Vehicles = () => {
    const [state, setState] = useState([])
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage ] = useState(1);
    const [postsPerPage] = useState(10);
    

    //Api call
  useEffect(() => {
    fetch("https://apidev.meep.me/tripplan/api/v1/routers/lisboa/resources?")
    .then(response => response.json())
    .then(data => setState(data))
  },[])

    //Limit to 200 objects
    var vehicles = [];
    vehicles = state.slice(0,200)
    console.log(vehicles)

 
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = vehicles.slice(indexOfFirstPost, indexOfLastPost);
  
 
    //Filter Vehicles
    const filteredVehicles = currentPosts.filter(vehicle =>
      vehicle.model.toLowerCase().includes(search.toLowerCase()) || vehicle.licencePlate.toLowerCase().includes(search.toLowerCase())
    );

 
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

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
          <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/Vehicles" className="nav-link" >Vehicles</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

{/*SearchBar to filter */}
<input className="form-control me-2" type="search" placeholder="Search..." onChange={e => {setSearch(e.target.value)}} />

<table className="table">
     <thead>

     <tr>
     <th style={{color:"black"}}>Matrícula</th>
     <th style={{color:"black"}}>Coordenadas</th>
     <th style={{color:"black"}}>Modelo</th>
   </tr>
   </thead>
<tbody>
  {filteredVehicles.map(vehicle => {
    return (
      <tr key={vehicle.id}>
      <td style={{color:"black"}}> {vehicle.licencePlate.toUpperCase()}</td>
      <td  style={{color:"black"}}> {vehicle.x} {vehicle.y}</td>
      <td style={{color:"black"}}>{vehicle.model}</td>
     
    </tr>
    )
  })}
   </tbody>
   </table>
   <Pagination postsPerPage={postsPerPage} totalPosts={}/>


       </div> 
    )
}

export default Vehicles;