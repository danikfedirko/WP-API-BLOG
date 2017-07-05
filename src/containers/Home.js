import React from 'react'
import createReactClass from 'create-react-class'
import PropTypes from 'prop-types';
import Menu from './Menu'
import Archive from './Archive'
import SidebarHomePage from './SidebarHomePage'

var Home = createReactClass({
  render () {
    return (
      <div className="home">
        <Menu/>
        <div className="mdl-grid">
          <Archive/>
          <SidebarHomePage/>
        </div>
      </div>
    )
  }
})

export default Home
