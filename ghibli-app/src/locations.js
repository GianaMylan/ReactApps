import React from 'react';
import axios from 'axios'; 
import {Link} from 'react-router-dom';

const LOCATIONS_URL = 'https://ghibliapi.herokuapp.com/locations'

export class Locations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async getLocations() {
       try {
           const res = await axios.get(LOCATIONS_URL);
           this.setState({ locations: res.data })
           console.log(res.data)
       } catch(e) {
           console.error(e.message);
       }
    }

    componentDidMount() {
        this.getLocations();
    }

    render() {
        return (
            <div className="locationClass">
                <div className="filmTitle">
                <h2> Locations in Films: </h2>
                </div>
                <div className="searchContainer"> 
                    <label className="search">
                        Search:
                        <input type="text" name="search" placeholder="Search" />
                    </label>
                </div> <br></br> 
                <div className="locationsList">
                    <ul>
                        { this.state.locations && this.state.locations.map(locations => (
                            <li key={locations.id}>
                                <Link to={`/location/${locations.id}`} className="Link">{ locations.name }</Link> 
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            /* name, climate, terrain, residents, films */
        )
    }
}

export default Locations;