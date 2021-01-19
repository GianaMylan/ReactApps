import React from "react";
import axios from 'axios';

//const PEOPLE_URL = 'https://ghibliapi.herokuapp.com/people/{id}'

export class charDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async getPeopleDetail() {
        try {
            const res = await axios.get(`https://ghibliapi.herokuapp.com/people/{id}`);
            this.setState({ id: res.data })
            console.log(res.data)
        } catch(e) {
            console.error(e.messaage);
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
            <h2> Character </h2>
            <div> {  }</div>
        </div>
    /* name, gender, age, eye_color, hair_color, species{state.species.id}, films{state.films.id} */
    )
  }
}

export default charDetail; 