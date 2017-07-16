import React from 'react'
import { Route, Switch } from 'react-router-dom';
import routes from '../routes'
import Main from './Main'

const App = React.createClass({
  render () {
    return (
      <Main>
          {routes}
      </Main>
    )
  }
})

export default App
