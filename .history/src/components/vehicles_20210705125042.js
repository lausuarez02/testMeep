import React , {useState} from "react";
import {Link} from "react-router-dom"


const Vehicles = () => {
    const [state, setState] = useState("")

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
         <p>Vehicles</p>
       </div> 
    )
}

export default Vehicles;