import React from 'react';
import axios from 'axios'


const MovieAction = (input) => async (dispatch)=>{
    const inp = input;

 
    const Movi = await axios.get(`https://www.omdbapi.com/?s=${input}&apikey=23989f82&`)
    const j = await Movi.data.Search
     const Movies= await j.filter((e)=>{
        if(e.Type==='movie'){
            return e;
        }

    })
     const Series= await j.filter((e)=>{
        if(e.Type==='series'){
            return e;
        }

    })
    console.log(Movies)
    console.log(Series)
    

    dispatch({
        type: "FETCH_MOVIES",
            payload :{
                Moviee :Movies
            },
      
    })
    dispatch({
        type: "FETCH_SERIES",
            payload :{
                Seriee :Series
            },
      
    })



};

export default MovieAction;