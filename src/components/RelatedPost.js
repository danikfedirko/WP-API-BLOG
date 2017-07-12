import React from 'react'
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class'
import {Link} from 'react-router-dom'
import { URL } from '../wp-url';
import {Card,CardTitle,CardText} from 'material-ui/Card'

const RelatedPost = createReactClass({
  render() {
    const {post, thumbSrc} = this.props
    return (
      <article>
        <Card className="card">
        <div className="post-thumbnail" style={{
          backgroundImage: 'url(' + thumbSrc + ')',
          backgroundSize:'cover',
          backgroundPosition:'center'
        }}></div>
          <Link to={'/'+post.url.replace(URL,'').replace('/','')+'--'+post.id}>
            <CardTitle title={post.title}></CardTitle>
          </Link>
      </Card>
      </article>
    )
  }
})
export default RelatedPost
