import React, { PropTypes } from 'react'
import Helmet from "react-helmet";

const Title = React.createClass({
  componentDidMount: function() {
    document.title = this.props.title.rendered
  },
  render (props) {
    return (
      <div></div>
    )
  }
})

export default Title
