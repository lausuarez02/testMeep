import React , {useState,useEffect} from "react";
import {Link} from "react-router-dom"
import Pagination from "./pagination";
import NavBar from "./navBar";

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
    var vehicless = [];
    vehicless = state.slice(0,200)
    console.log(vehicless)

 
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = vehicless.slice(indexOfFirstPost, indexOfLastPost);
  
 
    //Filter Vehicles
    const filteredVehicles = currentPosts.filter(vehicle =>
      vehicle.model.toLowerCase().includes(search.toLowerCase()) || vehicle.licencePlate.toLowerCase().includes(search.toLowerCase())
    );

 
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return(
       <div>
     
     
     <NavBar/>

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
   <Pagination paginate={paginate} postsPerPage={postsPerPage} totalPosts={vehicless.length}/>


       </div> 
    )
}

export default Vehicles;