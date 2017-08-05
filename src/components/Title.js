import React, { PropTypes } from 'react'
import Helmet from "react-helmet";

const Title = React.createClass({
  render (props) {
      document.title = this.props.title.rendered
    return (
      <div></div>
    )
  }
})

export default Title
