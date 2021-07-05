
import './App.css';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

//exporting components
import Body from "./components/body"
import Vehicles from "./components/vehicles";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Body}/>
        <Route exact path="/Vehicles" component={Vehicles}/>
      </Switch>
    </Router>

  );
}

export default App;
