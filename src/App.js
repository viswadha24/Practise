import './App.css'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import Menu from './Menu'
import About from './About'
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"

function App() {
  return (
      <Router>
        <div>
      <Navbar/>
        <Switch>
        <Route exact path='/'><Home/></Route>
        <Route path='/Login'><Login/></Route>
        <Route path='/Menu'><Menu/></Route>
        <Route path='/About'><About/></Route>
        </Switch>
        </div>
      </Router>
    
  );
}

export default App;
