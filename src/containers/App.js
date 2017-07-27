import React from 'react'
import { Route, Switch } from 'react-router-dom';
import routes from '../routes'
import Main from './Main'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const App = React.createClass({
  childContextTypes:{
  muiTheme: React.PropTypes.object.isRequired,
},
getChildContext() {
  return {muiTheme: getMuiTheme()};
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
