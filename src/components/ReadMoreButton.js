import React, { PropTypes } from 'react'
import {Link} from 'react-router-dom'

const ReadMoreButton = React.createClass({
  render () {
    const {post} = this.props
    return (
      <Link className="mdl-button mdl-js-button" to={{
        pathname: post.slug + '--' + post.id,
        query: {
          id: post.id
        }
      }}>
        Читать далее
      </Link>
    )
  }
})

export default ReadMoreButton
