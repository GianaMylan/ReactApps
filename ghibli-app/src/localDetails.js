import React, { useEffect, useState } from 'react';
import axios from 'axios';

//const LOCATIONS_URL = 'https://ghibliapi.herokuapp.com/locations/<id>'


function LocationDetails (match) {
    useEffect(() => {
       getLocationDetail();
      console.log(match);
   }, []);

   const [local, setLocation] = useState({});

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
              <h2> {local.name} </h2> <br></br> 
              {local.climate} <br></br> 
              {local.terrain} <br></br> 
              Seen In: <br></br>
              {local.films}<br></br> 
           </div>
       </div>
   )
} /* name, climate, terrain, residents, films */

export default LocationDetails ;