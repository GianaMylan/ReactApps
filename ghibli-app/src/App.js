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
import Films from './films';
import People from './characters';
import Location from './locations';

// BASE_URL = 'https://ghibliapi.herokuapp.com/' + "character/id/r89028"
//dedicated links 

class App extends React.Component {
    render() {
    return (
      <div>
        <Router>
          <h1 className="title">Welcome to the Ghibli 'Wiki'</h1>
          <div className="navigation">
            <nav>
              <ul>
                <li>
                  <Link to="/" className="homeLink">Home</Link>
                </li>
                <li>
                  <Link to="/people" className="peopleLink">Characters</Link>
                </li>
                <li>
                  <Link to="/films" className="filmLink">Films</Link>
                </li>
                <li>
                  <Link to="/location" className="locationLink">Locations</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/people">
                <People />
              </Route>
              <Route path="/films">
                <Films />
              </Route>
              <Route path="/location">
                <Location />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            </div>
        </Router>

      </div> /* entire page div */
    );
  }
}

class Home extends App{
  render() {
    return ( 
    <div className="homeClass">
      <h2>Studio Ghibli
      </h2>
      <div className="slideshow">
          <div className="crossfade">
              <figure></figure> <figure></figure> <figure></figure> 
              <figure></figure> <figure></figure> <figure></figure>
              <figure></figure> <figure></figure> <figure></figure>
              <figure></figure>
          </div>
        </div>
      <div className="about">
        <h5> Hayao Miyazaki's films and media have been popular for many years. This page is dedicated to information about the iconic films he created. </h5>
      </div>

    </div>
    )
  }
}


export default App;
