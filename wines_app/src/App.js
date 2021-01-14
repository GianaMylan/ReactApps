// installed axios - npm i axios. What does axios do? axios make HTTP requests (calls)
  // import axios
// installed react router - npm i react-router-dom. What does router do? Router generates urls
  // import react-router-dom
  import React from 'react';
  import axios from 'axios';
  import './App.css';
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
  const WINES_URL = 'http://myapi-profstream.herokuapp.com/api/7fe3ba/wines'

  class App extends React.Component {
    render() {
      return (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/wines">Wines</Link>
              </li>
            </ul>
            <Switch>
              <Route path="/wines">
                <Wines />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }
  }
  class Home extends React.Component {
    render() {
      return(
        <h1>Home component works!</h1>
      )
    }
  }
  class Wines extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.selectWine = this.selectWine.bind(this);
      this.editWine = this.editWine.bind(this);
      this.submitEditedWine = this.submitEditedWine.bind(this);
    }
    async getWines() {
      try {
        const res = await axios.get(WINES_URL);
        this.setState({ wines: res.data });
      } catch(e) {
        console.error(e);
      }
    }

    componentDidMount() {
      this.getWines();
    }

    handleChange(e) {
      const { name, value } = e.target;
      // ^^ assigns name and value to e.target as a general
      this.setState({ [name]: value })
    }

    async handleSubmit(e) {
      e.preventDefault();
      const { name, year, grapes, country, region, description, picture, price } = this.state; 
      //this is so you dont need to this.state.'something' for each
      //console.log({ name, year, grapes, country, region, description, picture, price })
      const wine = { name, year, grapes, country, region, description, picture, price };
      try {
        const res = await axios.post(WINES_URL, wine);
        console.log(res.data);
        const updateRes = await axios.get(WINES_URL);
        this.setState({ wines: updateRes.data });
      } catch(e) {
        console.error(e.message);
      }
    }

    async handleDelete(id) {
      console.log(WINES_URL + id);
      //const { id } = ev.target;
      try {
        const res = await axios.delete(WINES_URL + id); // target wine id
        console.log(res.data);
        const updateRes = await axios.get(WINES_URL);
        this.setState({ wines: updateRes.data});
      } catch(e) {
        console.error(e.message)
      }
    }

    selectWine(selectedWine) {
      //put wine in selected state
      this.setState({ selectedWine });

      //input fields to edit
      //we may want to use ID
      //axios.patch
      //console.log(selectedWine);
    }

    editWine(e){
      //console.log(e.target.value)
      const { name, value } = e.target
      this.setState({...this.state, selectedWine: { ...this.state.selectedWine, [name]: value }})
    }

    async submitEditedWine(e) {
      e.preventDefault();
      try {
        const editedWine = this.state.selectedWine; // this obj has an id
        console.log(editedWine)
        // to send our patch to url + /:id
        const focusWine = WINES_URL + editedWine.id
        const res = await axios.patch(focusWine, editedWine);
        const resRefresh = await axios.get(WINES_URL);
        this.setState({ wines: resRefresh.data });
      } catch(e) {
        console.error(e);
      }
    }

    render() {
      return (
        <div className="wines">
          <ul>
            {/* render info */}
            {
              this.state.wines && this.state.wines.map(wine => (
              <li key={ wine.id }>
                { wine.name }:  ${ wine.price } 
                <button onClick={ () => this.handleDelete(wine.id) }>Delete Wine</button>
                <button onClick={() => this.selectWine(wine)}>Edit Wine</button>
              </li>
              ))
            }
          </ul>
          <form className="new-wine-form"
            onChange={ this.handleChange }
            onSubmit={ this.handleSubmit }>
              <h3> Add a New Wine: </h3>
            <label>
              Wine name:
              <input type="text" name="name"/>
            </label>
            <label>
              Year wine was made:
              <input type="text" name="year"/>
            </label>
            <label>
              Grapes used:
              <input type="text" name="grapes" />
            </label>
            <label>
              Country of wine:
              <input type="text" name="country" />
            </label>
            <label>
              Wine region:
              <input type="text" name="region" />
            </label>
            <label>
              Description of wine:
              <input type="text" name="description" />
            </label>
            <label>
              Picture url:
              <input type="text" name="picture" />
            </label>
            <label>
              Price:
              <input type="text" name="price" />
            </label>
            <input type="submit" className="submitButton" />
          </form>
          
          <hr></hr>
          {/* we want form to show */}
          {/* only after we click on it */}
          {/* if this.stat.selectedWine exists */}
          {/* this.state.selectedWine && formBelow */}
          
          { this.state.selectedWine && 
          <form className="wine-edit-form"
          onChange ={ this.editWine }>
            <h3>Edit Wine: </h3>
            <label>
              Wine name:
              <input type="text" name="name" defaultValue={ this.state.selectedWine.name } />
            </label>
            <label>
              Year wine was made:
              <input type="text" name="year" defaultValue={ this.state.selectedWine.year } />
            </label>
            <label>
              Grapes used:
              <input type="text" name="grapes" defaultValue={ this.state.selectedWine.grapes } />
            </label>
            <label>
              Country of wine:
              <input type="text" name="country" defaultValue={ this.state.selectedWine.country } />
            </label>
            <label>
              Wine region:
              <input type="text" name="region" defaultValue={ this.state.selectedWine.region } />
            </label>
            <label>
              Description of wine:
              <input type="text" name="description" defaultValue={ this.state.selectedWine.description } />
            </label>
            <label>
              Picture url:
              <input type="text" name="picture" defaultValue={ this.state.selectedWine.picture } />
            </label>
            <label>
              Price:
              <input type="text" name="price" defaultValue={ this.state.selectedWine.price } />
            </label>
            <input type="submit" className="submitButton" />
          </form> }
        </div>
      )
    }
  }

  
  export default App;