import React, { useEffect, useState } from "react";
import axios from 'axios';

//const PEOPLE_URL = 'https://ghibliapi.herokuapp.com/people/{id}'

/*
function ItemDetail() {
    useEffect(() => {}, []);
}

const [item, setItem] = useState({});
const fetchItem = async () => {
    const fetchItem = await fetch(`url`)
    const item = await fetchItem.json();

    console.log(item);
}
*/


function CharDetail (match) {
     useEffect(() => {
        getPeopleDetail()
       console.log(match)
    }, []);

    const [item, setCharacter] = useState({});

    const getPeopleDetail = async() => {
        try {
            const res = await axios.get(`https://ghibliapi.herokuapp.com/people/${match.params.id}`);
            setCharacter( res.data )
            console.log( res.data )
        } catch(e) {
            console.error(e.message);
        }
    }
    return(
        <div> 
            <div>
               <h2> {item.name} </h2> <br></br> 
               {item.age} <br></br> 
               {item.gender} <br></br> 
               {item.hair_color}<br></br> 
               {item.eye_color} <br></br> 
            </div>
        </div>
    )
}


    /*
    async getPeopleDetail({match}) {
        try {
            const res = await axios.get(`https://ghibliapi.herokuapp.com/people/{id}`);
            this.setState({ id: res.data })
            console.log(res.data)
        } catch(e) {
            console.error(e.messaage);
        }
    }*/
/*
    componentDidMount() {
        this.getPeopleDetail();
    }
*/
    /* name, gender, age, eye_color, hair_color, species{state.species.id}, films{state.films.id} */

export default CharDetail; 