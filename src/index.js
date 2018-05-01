import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Switch, Route} from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import {AUTH_USER} from './actions/types';

import App from './components/app';
import reducers from './reducers';
import history from './history';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');

if(token){
  store.dispatch({type: AUTH_USER})
}


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
    </Router>
  </Provider>, document.querySelector('#root'));
