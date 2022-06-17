import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header/Header';
import App from './App';
import mainReducers from './common/Redux/ReducerCombiner';
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
const store = createStore(mainReducers,applyMiddleware(thunk))






const container =  document.getElementById("root");
 const RootContainer = ReactDOM.createRoot(container)
 RootContainer.render(
  <React.StrictMode>
  <Provider store={store}>
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
    <Route path="/" element={<App />}/>s
    </Routes>
    </Router>
    </Provider>
</React.StrictMode>,

 )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

