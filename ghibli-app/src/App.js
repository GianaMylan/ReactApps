//import logo from './logo.svg';
import './App.css';
import React from "react";
//import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './home';
import Films from './films';
import People from './characters';
import Location from './locations';
import charDetail from './charDetail';
import locationDetails from './localDetails';
import filmDetail from './filmDetail';

// BASE_URL = 'https://ghibliapi.herokuapp.com/' + "character/id/r89028"
//dedicated links 

class App extends React.Component {
    render() {
    return (
      <div>
        <Router>
          <div  className="title">
            <h1 className="mainTitle">Welcome to the Ghibli 'Wiki'</h1>
          </div>
          <div className="navigation">
            <nav>
              <Link to="/" className="Link">Home</Link>
              <Link to="/people" className="Link">Characters</Link>
              <Link to="/films" className="Link">Films</Link>
              <Link to="/location" className="Link">Locations</Link>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/people" exact component={People} />
              <Route path="/people/:id" component={charDetail} />
              <Route path="/films" exact component={Films} />
              <Route path="/films/:id" component={filmDetail} />
              <Route path="/location" exact component={Location} />
              <Route path="/location/:id" component={locationDetails} />
              <Route path="/" exact component={Home} />
            </Switch>
            </div>
        </Router>

      </div> /* entire page div */
    );
  }
}

export default App;
