import React,{useEffect,useState}from 'react';
import MovieAction from './common/Action/MovieAction';
import { useDispatch,useSelector} from 'react-redux'
import Url from './common/API/MovieApi';
import './App.scss'
import Home from './components/Home/Home';
import Nav from './components/Nav';



function App() {
  const[input,setInput] = useState("Avengers")
  console.log(input)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(MovieAction(input))
   },[])
  
  
  return (
    
    <div className="App">
      <Nav setInput={setInput}/>
      <Home/>
      <Url input={input}/>

    </div>
  );
}

export default App;
