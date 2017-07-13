import Home from './containers/Home'
import Archive from './containers/Archive'
import SinglePost from './containers/SinglePost'
import Page from './containers/Page'
import NotFound from './components/NotFound.js'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const routes = (
        <Switch>
  <Route path='/' component={Home} exact/>
  <Route path='/:slug--:id' component={SinglePost}/>
  <Route path='/pages/:slug--:id' component={Page}/>
  <Route path='/category/:slug--:id' component={Archive}/>
  <Route path='/search/:searchWord' component={Archive}/>
  <Route component={NotFound}/>
  </Switch>
)

export default routes
