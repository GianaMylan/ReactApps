import React from 'react';
import axios from 'axios';

//const LOCATIONS_URL = 'https://ghibliapi.herokuapp.com/locations/<id>'

export class localDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async getLocations() {
       try {
           const res = await axios.get(``);
           this.setState({ locations: res.data })
           console.log(res.data)
       } catch(e) {
           console.error(e.message);
       }
    }
    /*
    componentDidMount() {
        this.getPeopleDetail();
    }
*/
render() {
    return (
        <div>
            <h2> Location </h2>
        </div>
    /* name, gender, age, eye_color, hair_color, species{state.species.id}, films{state.films.id} */
    )
  }
}

export default localDetails ;