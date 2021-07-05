
import './App.css';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';



//exporting components
import Body from "./components/body"
impor

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Body}/>
      </Switch>
    </Router>

  );
}

export default App;
