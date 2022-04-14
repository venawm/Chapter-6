import React from 'react';

const initState ={
    movieDetails : []
}

const movieDetailsReducer = (state = initState,action) => {
    switch(action.type){
        case "MOVIE_DETAILS":
            return{...state,movieDetails: action.payload.MovieDetails}

        default:
            return{...state}
    }
    
};

export default movieDetailsReducer;