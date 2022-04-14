import React from 'react';
import MovieDetailsAction from '../../common/Action/MovieDetatils';
import MMovieDetails from './movieDetails';
import { useDispatch,useSelector} from 'react-redux'

const MovieCards = ({title,img,year,imdb,setTitle}) => {
    const obj = {
        title :imdb,
        year:year
    }
    const dispatch = useDispatch()
    const movieDetails = ()=>{
        setTitle("v")
        dispatch(MovieDetailsAction(obj))
            
    }
    return (
        <div className='cards' onClick={movieDetails}>

            
            <img src={img} alt="" />
            <h1>{title}</h1>
            

        </div>
    );
};


export default MovieCards;