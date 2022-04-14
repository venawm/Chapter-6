import React,{useState} from 'react';
import {useSelector} from 'react-redux'
import MovieCards from './MovieCards';
import MMovieDetails from './movieDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Home.scss'

const Home =   () => {
    const movies = useSelector(state=>state.movies.Movie)
    const series = useSelector(state=>state.movies.Serie)
    const movie = useSelector(state=>state.details.movieDetails)
    const j = movie.Title
    const [title,setTitle] = useState("")
    const t = title
    console.log(t)

    console.log(movies)
    console.log(series)   
   
    return (
        <div className='Movies'>
            <h1>Movies</h1>
            <div className="nomain">
            {t&&<MMovieDetails setTitle={setTitle} title={title}/>}
            </div>
            <div className="main">
           <div className="h">
            <div className="moviecards">
           
               
               {movies.map((e)=>{
                   return <MovieCards setTitle={setTitle} imdb={e.imdbID} title={e.Title} img={e.Poster} year={e.Year}/>
               })}
            </div>
            </div>
            <h1>Series</h1>
           <div className="series">
               
           <div className="seriescards">
               {
                   series.map((e)=>{
                    return <MovieCards title={e.Title} img={e.Poster} year={e.Year}/>
                   })
               }

           </div>
           </div>
           </div>
           
          
        </div>
    );
};

export default Home;

