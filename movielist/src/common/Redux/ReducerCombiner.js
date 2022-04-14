import MovieReducer from "./reducer";
import movieDetailsReducer from "./movieDetailsReducer";
import {combineReducers} from 'redux'

const mainReducers =combineReducers({
    movies:MovieReducer,
    details :movieDetailsReducer
})
export default mainReducers;