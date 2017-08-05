import React, { PropTypes } from 'react'
import Helmet from "react-helmet";

const Title = React.createClass({
  componentDidMount(props) {
    document.title = this.props.title.rendered
  },
  render () {
    return (
      <div></div>
    )
  }
})

export default Title
