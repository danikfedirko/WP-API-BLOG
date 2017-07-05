import React from 'react'
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class'
import {Link} from 'react-router-dom'
import { URL } from '../wp-url';

const RelatedPost = createReactClass({
  render() {
    const {post, thumbSrc} = this.props
    return (
      <article className="mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title mdl-card--expand" style={{
          backgroundImage: 'url(' + thumbSrc + ')'
        }}></div>
        <div className="mdl-card__supporting-text">
          <Link to={{pathname:post.url.replace(URL,'').replace('/','')+'--'+post.id, query: { id: post.id } }}><h2 className="mdl-card__title-text">{post.title}</h2></Link>
        </div>
      </article>
    )
  }
})
export default RelatedPost
