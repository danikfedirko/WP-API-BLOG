import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import Home from './containers/Home'
import Archive from './containers/Archive'
import Main from './containers/Main'
import SinglePost from './containers/SinglePost'
import Page from './containers/Page'
import NotFound from './components/NotFound.js'
import './css/main.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <MuiThemeProvider>
      <Main>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/:slug--:id' component={SinglePost}/>
          <Route path='/pages/:slug--:id' component={Page}/>
          <Route path='/category/:slug--:id' component={Archive}/>
          <Route path='/search/:searchWord' component={Archive}/>
          <Route component={NotFound}/>
        </Switch>
      </Main>
    </MuiThemeProvider>
  </BrowserRouter>
</Provider>, document.getElementById('root'));
