
import React,{useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch,useSelector} from 'react-redux'
import MovieAction from '../common/Action/MovieAction';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import img from '../images/icons8-search.svg'
import formAction from './formaction';
import './Nav.scss'


const Nav = ({setInput,input}) => {
    const dispatch = useDispatch();
    
    
    const formAction=(e)=>{
        
      e.preventDefault()
        const value = e.target.a.value
        console.log(value)
        setInput(value)
        dispatch(MovieAction(value))
    }
    
    

    
    
    const element  = (
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
    )
    return (
        <div className='nav'>
            <h1>.Flix</h1>
            <form onSubmit={formAction} action="">
                <input type="text" name='a'  placeholder='Search'/>
                <img src={img} alt="" />
                <element/>
               
            </form>
           
        </div>

    );
};

export default Nav;