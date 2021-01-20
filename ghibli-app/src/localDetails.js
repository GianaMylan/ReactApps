import React, { useEffect, useState } from 'react';
import axios from 'axios';

//const LOCATIONS_URL = 'https://ghibliapi.herokuapp.com/locations/<id>'


function LocationDetails ({match}) {
    useEffect(() => {
       getLocationDetail();
      console.log(match);
   }, []);

   const [item, setLocation] = useState({});

   const getLocationDetail = async() => {
       try {
           const res = await axios.get(`https://ghibliapi.herokuapp.com/locations/${match.params.id}`);
           setLocation( res.data );
           console.log( res.data );
       } catch(e) {
           console.error(e.message);
       }
   }
   return(
       <div> 
           <h2> locale in Ghibli </h2>
           <div>
              <h2> {item.name} </h2> <br></br> 
              <b>Climate: </b> <br></br> 
              <b>Terrain: </b> <br></br> 
              Seen In: <br></br>
              <br></br> 
           </div>
       </div>
   )
} /* name, climate, terrain, residents, films */

export default LocationDetails ;