import React from "react";
import axios from 'axios';

//const PEOPLE_URL = 'https://ghibliapi.herokuapp.com/people'

export class charDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async getPeopleDetail() {
        try {
            const res = await axios.get(`https://ghibliapi.herokuapp.com/people/<id>`);
            this.setState({ people: res.data })
            console.log()
        } catch(e) {
            console.error(e.messaage);
        }
    }

    componentDidMount() {
        this.getPeopleDetail();
    }

    render() {
    return (
    <div className="charDetail">
        <div className="containerTitle">
            <h2> Name{/* character name */} </h2>
        </div>
        <div className="character">

        </div>
    </div>
    /* name, gender, age, eye_color, hair_color, species{state.species.id}, films{state.films.id} */
    )
  }
}

export default charDetail; 