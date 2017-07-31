import React, { PropTypes } from 'react'
import Helmet from "react-helmet";

const Title = React.createClass({
  render () {
    return (
      <Helmet>
        <title>{this.props.title}</title>
      </Helmet>
    )
  }
})

export default Title
