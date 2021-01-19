import React from 'react';
import axios from 'axios';


//const FILMS_URL = 'https://ghibliapi.herokuapp.com/films/<id>'


export class filmDetail extends React.Component {
    constructor (props) {
        super(props); 
        this.state = {};
    }

    async getFilms() {
      try {
        const res = await axios.get(``);
        this.setState({ films: res.data })
        console.log(res.data)
      } catch (e) {
        console.error (e.message);
      }
    }

    componentDidMount() {
      this.getFilms();
    }
    
    render () {
      return (
          <h2> film </h2>
      );
    }        /* title, description, director, producer, release_date, rt_score, characters {state.people}, species {state.species.id} */
}
export default filmDetail;