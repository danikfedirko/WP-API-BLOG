import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import Home from './containers/Home'
import SinglePost from './containers/SinglePost'
import './css/main.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
    <Route path='/' component={Home} exact>
    </Route>
    <Route path='/:slug--:id' component={SinglePost}>
    </Route>
  </Switch>
  </BrowserRouter>
</Provider>, document.getElementById('root'));
