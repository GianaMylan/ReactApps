import React from "react";
import axios from 'axios';

const FILMS_URL = 'https://ghibliapi.herokuapp.com/films'

export class Films extends React.Component {
    constructor (props) {
        super(props); 
        this.state = {};
    }

    async getFilms() {
      try {
        const res = await axios.get(FILMS_URL);
        this.setState({ films: res.data })
      } catch (e) {
        console.error (e.message);
      }
    }

    componentDidMount() {
      this.getFilms();
    }
    
    render () {
      return (
        <div className="filmClass">
          <div className="filmTitle">
          <h2>Films : <br></br> </h2>
          </div>
          <div className="searchContainer"> 
            <label className="search">
                Search:
                <input type="text" name="search" placeholder="Search" />
            </label> <br></br> <br></br>
        </div>
          <div className="filmList">
            <ul>
                {
                  this.state.films && this.state.films.map(films => (
                    <li key={films.id}>
                      { films.title } ({ films.release_date })
                    </li>
                  ))
                }
            </ul>
          </div>
        </div>
        /* title, description, director, producer, release_date, rt_score, characters {state.people.film}, species {state.species.id} */
      )
    }
  }

  export default Films;