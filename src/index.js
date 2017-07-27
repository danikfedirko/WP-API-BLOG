
import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import configureStore from './store'
import './static/css/main.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {grey900, grey400, grey100, grey500, cyan500} from 'material-ui/styles/colors';
import App from './containers/App'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export const store = configureStore()



window.onload = () => {
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
    <MuiThemeProvider>
     <App/>
    </MuiThemeProvider>
  </BrowserRouter>
</Provider>, document.getElementById('root'));
}
