import React, { useEffect, useState } from "react";
import axios from 'axios';


//const FILMS_URL = 'https://ghibliapi.herokuapp.com/films/<id>'


    function FilmDetail (match) {
        useEffect(() => {
           getFilmDetail()
          console.log(match)
       }, []);
   
       const [item, setFilm] = useState({});
   
       const getFilmDetail = async() => {
           try {
               const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${match.params.id}`);
               setFilm( res.data )
               console.log( res.data )
           } catch(e) {
               console.error(e.message);
           }
       }
       return(
           <div> 
               <div>
                  <h2> {item.title} {item.release_date} </h2> <br></br> 
                  Directed By: {item.director} <br></br> 
                  Produced By: {item.producer} <br></br> 
                  Description: <br></br>
                  {item.description}<br></br> 
               </div>
           </div>
       )
   }
   

          /* title, description, director, producer, release_date, rt_score, characters {state.people}, species {state.species.id} */

export default FilmDetail;