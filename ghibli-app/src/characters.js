import React from "react";
import axios from 'axios';

const PEOPLE_URL = 'https://ghibliapi.herokuapp.com/people'

export class People extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async getPeople() {
        try {
            const res = await axios.get(PEOPLE_URL);
            this.setState({ people: res.data })
        } catch(e) {
            console.error(e.messaage);
        }
    }

    componentDidMount() {
        this.getPeople();
    }

    render() {
    return (
    <div className="peopleClass">
        <div className="containerTitle">
            <h2>Characters <br></br>
            list goes here </h2>
        </div>
        <div className="searchContainer"> 
            <label className="search">
                Search:
                <input type="text" name="search" placeholder="Search" />
            </label> <br></br> <br></br>
        </div>
        <div className="charList">
            <ul>
                {
                    this.state.people && this.state.people.map( people => (
                        <li key={ people.id }>
                            { people.name }
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
    /* name, gender, age, eye_color, hair_color, species{state.species.id}, films{state.films.id} */
    )
  }
}

export default People 