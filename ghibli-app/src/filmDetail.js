import React, { useEffect, useState } from "react";
import axios from 'axios';


//const FILMS_URL = 'https://ghibliapi.herokuapp.com/films/<id>'


    function FilmDetail ({match}) {
        useEffect(() => {
           getFilmDetail();
          console.log(match);
       }, []);
   
       const [item, setFilm] = useState({});
   
       const getFilmDetail = async() => {
           try {
               const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${match.params.id}`);
               setFilm( res.data );
               console.log( res.data );
           } catch(e) {
               console.error(e.message);
           }
       }
       return(
           <div> 
               <div>
                  <h2> {item.title} ({item.release_date}) </h2> <br></br> 
                  <b> Directed By: </b> <br></br> {item.director} <br></br> <br></br>
                  <b> Produced By: </b> <br></br> {item.producer} <br></br> <br></br>
                  <b> Rotten Tomato Score: </b> <br></br> {item.rt_score} <br></br><br></br>
                  <b> Description: </b> <br></br> 
                  {item.description}<br></br> <br></br>
                  <b> Characters: </b> <br></br>
                  <li> {item.people} </li> <br></br> <br></br>
                  <b> Species: </b> <br></br>
                  <li> {item.species} </li>
               </div>
                <div>
                    <footer> All information sourced from: 
                    The Studio Ghibli API<br></br>
                    Page created by: Giana Mylan</footer>
                </div>
           </div>
       )
   }
   

          /* title, description, director, producer, release_date, rt_score, characters {state.people}, species {state.species.id} */

export default FilmDetail;