import React from 'react'
import createReactClass from 'create-react-class'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchSidebars} from '../actions/sidebars'

var SidebarHomePage = createReactClass({
  componentWillMount: function() {
    const {fetchSidebars} = this.props
    fetchSidebars()
  },
  createMarkup(html) {
      return {
          __html: html
      };
  },
  render () {
    const {sidebar} = this.props
    return (
        <div id="sidebar" className="animated fadeIn mdl-cell mdl-cell--4-col">
          <div dangerouslySetInnerHTML={this.createMarkup(sidebar.rendered)}>
          </div>
        </div>
    )
  }
})

function mapStateToProps(state){
  return{
    sidebar:state.sidebars.sidebars
  }
}

export default connect(mapStateToProps, {fetchSidebars})(SidebarHomePage)
