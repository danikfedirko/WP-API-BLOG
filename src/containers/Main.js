import React from 'react'
import createReactClass from 'create-react-class'
import PropTypes from 'prop-types';
import Menu from './Menu'
import Categories from './Categories'
import SidebarHomePage from './SidebarHomePage'
import Popup from './Popup'

var Home = createReactClass({
  render () {
    return (
      <div className="home">
        <Menu/>
        <div className="mdl-grid primary-content">
          {this.props.children}
          <SidebarHomePage/>
        </div>
        <Popup/>
      </div>
    )
  }
})

export default Home
