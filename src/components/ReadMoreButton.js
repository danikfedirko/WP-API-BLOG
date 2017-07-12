import React, { PropTypes } from 'react'
import {Link} from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton';

const ReadMoreButton = React.createClass({
  render () {
    const {post} = this.props
    return (
      <FlatButton>
      <Link to={'/'+post.slug + '--' + post.id}>
        Читать далее
      </Link>
    </FlatButton>
    )
  }
})

export default ReadMoreButton
