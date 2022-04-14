import axios from "axios";

const MovieDetailsAction =(obj)=>async (dispatch)=>{
    const url = `https://www.omdbapi.com/?i=${obj.title}&apikey=23989f82&y=${obj.year}&plot=full`
    const Details = await axios.get(url)
    

    dispatch({
        type: "MOVIE_DETAILS",
            payload :{
                MovieDetails :Details.data
            },
      

})
}
export default MovieDetailsAction;