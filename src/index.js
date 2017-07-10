import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import Home from './containers/Home'
import Archive from './containers/Archive'
import Main from './containers/Main'
import SinglePost from './containers/SinglePost'
import Page from './containers/Page'
import './css/main.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Main>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/:slug--:id' component={SinglePost}/>
        <Route path='/pages/:slug--:id' component={Page}/>
        <Route path='/category/:slug--:id' component={Archive}/>
        <Route path='/search/:searchWord' component={Archive}/>
      </Switch>
    </Main>
  </BrowserRouter>
</Provider>, document.getElementById('root'));
