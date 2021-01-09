import React from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const PEOPLE_URL = 'http://myapi-profstream.herokuapp.com/api/5eaf5c/persons'
const BOOKS_URL = 'http://myapi-profstream.herokuapp.com/api/e8f2c9/books'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/persons">People</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/persons">
            <Persons />
          </Route>
          <Route path="/books">
            <Books />
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
    return (
      <div className="home">
      <h1 className="title"> Welcome to the People and Book App </h1>
      </div>
    )
  }
}

class Persons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  async getPersons() {
    try {
      const res = await axios.get(PEOPLE_URL) ; 
      this.setState({ persons: res.data });
    } catch(e) {
      console.error(e.message); 
    }
  }

  componentDidMount() {
    this.getPersons();
  }

  handleChange(e) {
    const {name, value } = e.target;
    this.setState({ [name]: value })
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { firstname, lastname, email, username } = this.state;
    const persons = { firstname, lastname, email, username };
    try {
      const res = await axios.post(PEOPLE_URL, persons);
      console.log(res.data);
      const updateRes = await axios.get(PEOPLE_URL);
      this.setState ({ persons: updateRes.data });
    } catch(e) {
      console.error(e.message)
    }
  }

  async handleDelete(e) {
    const { id } = e.target;
    try {
      const res = await axios.delete(PEOPLE_URL + id);
      console.log(res.data);
      const updateRes = await axios.get(PEOPLE_URL);
      this.setState({ people: updateRes.data });
    } catch(e) {
      console.error(e.message)
    }
  }

  render() {
    return (
      <div className="persons">
        <h1 className="title"> The people of the site </h1>
        <div className="parent">
        <ul>
          <div> 
            { 
            this.state.persons && this.state.persons.map(persons => (
              <li className="children">
              Name: { persons.firstname } { persons.lastname } 
              <br></br>
              Email: { persons.email }
              <br></br>
              Username: { persons.username }
              <br></br> <br></br>
              <button className="deleteButton" onClick={ () => this.handleDelete(persons.id)}>Delete User</button><br></br>
              <br></br> 
              </li> 
            ))
            }
          </div> <br></br> {/* class parent */}
          <br></br>
        </ul> <br></br>
        </div>
        <div>
          <form className="newPersonForm"
            onChange={ this.handleChange }
            onSubmit={ this.handleSubmit }>
            <h3> Add a new user:</h3>
            <label>
              First Name: 
              <input type="text" name="firstname" />
            </label> <br></br> <br></br>
            <label>
              Last Name: 
              <input type="text" name="lastname" />
            </label> <br></br> <br></br>
            <label>
              Email: 
              <input type="text" name="email" />
            </label> <br></br> <br></br>
            <label>
              Username: 
              <input type="text" name="username" />
            </label> <br></br> <br></br> 
            <input type="submit" className="submitButton" /> 
          </form>
        </div>
      </div> /* class persons */
    )
  }
}
//firstname, lastname, email, username


class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async getBooks () {
    try {
      const res = await axios.get(BOOKS_URL);
      this.setState({ books: res.data });
    } catch(e) {
      console.error(e.message);
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  async handleChange(e) {
    const {name, value } = e.target;
    this.setState({ [name]: value })
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { title, author, release_data, image } = this.state;
    const books = { title, author, release_data, image };
    try {
      const res = await axios.post(BOOKS_URL, books);
      console.log(res.data);
      const updateRes = await axios.get(BOOKS_URL);
      this.setState ({ books: updateRes.data });
    } catch(e) {
      console.error(e.message)
    }
  }
// title, author, release_date, image
  async handleDelete(e) {
    const { id } = e.target;
    try {
      const res = await axios.delete(BOOKS_URL + id);
      console.log(res.data);
      const updateRes = await axios.get(BOOKS_URL);
      this.setState({ books: updateRes.data });
    } catch(e) {
      console.error(e.message)
    }
  }

  render () {
    return (
      <div className="books">
        <h1 className="title"> Reading List </h1>
        <div>
          <div className="parent">
          <ul>
            {
              this.state.books && this.state.books.map(books =>
                <li className="children">
                  Title: { books.title } <br></br>
                  Author: { books.author } <br></br>
                  Released on { books.release_date } <br></br>
                  <br></br> 
                  <button className="deleteButton" onClick={ () => this.handleDelete(books.id)}>Delete Entry </button><br></br>
                </li>)
            }
          </ul> <br></br>
          </div>
          <div>
            <form className="bookForm"
            onChange = { this.handleChange }
            onSubmit = { this.handleSubmit }>
              <h3> Add a new book: </h3>
              <label>
                Title: 
                <input type="text" name="title" />
              </label> <br></br> <br></br>
              <label>
                Author: 
                <input type="text" name="author" />
              </label> <br></br> <br></br>
              <label>
                Released on: 
                <input type="text" name="released" />
              </label> <br></br> <br></br>
              <button className="submitButton" >Add New Book</button>
            </form> <br></br> <br></br>
          </div> {/* form div */}
        </div> {/*booksContainer div */}
      </div>
    )
  }
}
// title, author, release_date, image

export default App;
