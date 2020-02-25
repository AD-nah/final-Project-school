import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
 import {BrowserRouter} from 'react-router-dom'

 import '@fortawesome/fontawesome-free/css/all.min.css';
 import 'bootstrap-css-only/css/bootstrap.min.css';
 import 'mdbreact/dist/css/mdb.css';



//errors packages also using redux packages
// redux Packages
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import combineReducers from './Redux/combineReducers'







const store = createStore(combineReducers, composeWithDevTools(applyMiddleware( thunk )))

ReactDOM.render(
  <BrowserRouter>
      <Provider store = {store}>
          <App />
      </Provider>
  </BrowserRouter>, document.getElementById('root')
)

serviceWorker.unregister();
