import React from 'react';

const initState = {
    Movie :[],
    Serie :[],
    SearchMovie :[]
}

const MovieReducer = (state = initState,action) => {
    switch(action.type){
        case "FETCH_MOVIES" :
            return{...state,Movie:action.payload.Moviee}
        case "FETCH_SERIES" :
            return{...state,Serie:action.payload.Seriee}
        case "SEARCH_MOVIE" :
            return{...state}
        default:
            return{...state}
    }
   
};

export default MovieReducer
