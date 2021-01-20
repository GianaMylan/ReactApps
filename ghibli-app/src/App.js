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
import charDetail from './charDetail';
import localDetail from './localDetails';
import filmDetail from './filmDetail';

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
              <Route path="/location/:id" component={localDetail} />
              <Route path="/" exact component={Home} />
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
      <div>
        <footer> All information sourced from: <br></br>
        https://ghibliapi.herokuapp.com/<br></br>
        Page created by: Giana Mylan</footer>
      </div>

    </div>
    )
  }
}


export default App;
