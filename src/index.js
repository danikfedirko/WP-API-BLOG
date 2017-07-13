import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import routes from './routes'
import Main from './containers/Main'
import './css/main.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {grey900, grey400, grey100, grey500} from 'material-ui/styles/colors';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export const store = configureStore()

export const theme = {
  palette: {
    primary1Color: grey900,
    primary2Color: grey900,
    primary3Color: grey400,
    accent1Color: grey400,
    accent2Color: grey100,
    accent3Color: grey500
  },
};

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
    <MuiThemeProvider theme={theme}>
      <Main>
          {routes}
      </Main>
    </MuiThemeProvider>
  </BrowserRouter>
</Provider>, document.getElementById('root'));
