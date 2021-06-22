import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import sneakerReducer from "./reducers/sneakerReducer";

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(sneakerReducer, composeEnhancers(applyMiddleware(thunk)))
 
ReactDOM.render(
  <Provider store={store}> 
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root'));

// Provider makes the redux store available for the rest of the app
// store created and hold app within the router provided react-router-dom