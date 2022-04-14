import React from "react";
import './mvd.scss'
import { useDispatch,useSelector} from 'react-redux'
const MMovieDetails = ({setTitle}) => {
    const clear= ()=>{
        setTitle("")
    }
    const movie = useSelector(state=>state.details.movieDetails)
    console.log(movie)
   const title = movie.Title
   const plot = movie.Plot
   const rating = movie.imdbRating
    
    return (
        
        <div class='Details' onClick={clear}>
            <h1>{title}</h1>
            <p>{plot}</p>
            <h3>Ratings:{rating}</h3>


            
        </div>
    );
};

export default MMovieDetails;