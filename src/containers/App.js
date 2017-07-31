import React from 'react'
import { Route, Switch } from 'react-router-dom';
import routes from '../routes'
import Main from './Main'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {grey900, grey400, grey100, grey500, cyan500} from 'material-ui/styles/colors';

const App = React.createClass({
  childContextTypes:{
  muiTheme: React.PropTypes.object.isRequired,
},
getChildContext() {
  return {muiTheme: getMuiTheme({palette: {
    primary1Color: grey900,
    primary2Color: grey900,
    primary3Color: grey400,
    accent1Color: grey400,
    accent2Color: grey100,
    accent3Color: grey500
  }})};
},
  render () {
    return (
      <Main>
          {routes}
      </Main>
    )
  }
})


export default App
