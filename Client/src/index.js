import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
 import { BrowserRouter } from 'react-router-dom'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import axios from 'axios'


//errors packages also using redux packages
// redux Packages
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import combineReducers from './Redux/combineReducers'
import {userLoggedIn} from './Redux/Actions/auth'
//import decode from 'jwt-decode'
const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)))


if (localStorage.sCount){


 // const payload  = decode(localStorage.sCount);
    
  const user = { token: localStorage.sCount }
  store.dispatch(userLoggedIn(user))


}




export default store
ReactDOM.render(
  <BrowserRouter>
      <Provider store = {store}>
          <App/>
      </Provider>
  </BrowserRouter>, document.getElementById('root')
)

serviceWorker.unregister();
