import React, {PropTypes} from 'react'
import createReactClass from 'create-react-class'
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom'
import ProgressiveImage from 'react-progressive-bg-image';
import {Card,CardActions,CardMedia,CardTitle,CardText} from 'material-ui/Card';

const CategorieBlockPost = createReactClass({
  getInitialState: function() {
    return {thumbFetching: true, thumbSrcSmall: '', thumbSrcNormal: ''};
  },
  componentDidMount: function() {
    const {featuredmedia} = this.props
    axios.get(featuredmedia).then((response) => {
      const m_sizes = response.data["media_details"].sizes
      this.setState(function() {
        return {thumbFetching: false, thumbSrcSmall: m_sizes.thumbnail.source_url, thumbSrcNormal: m_sizes.medium.source_url}
      })
    })
  },
  createMarkup(html) {
    return {__html: html};
  },
  render() {
    const {post, link} = this.props;
    return (
      <article className="animated fadeIn">
        <Card className="card">
          <div className="post-thumbnail">
            {this.state.thumbFetching
              ? <div style={{
                  backgroundColor: '#ccc',
                  height: '10em'
                }}></div>
              : <ProgressiveImage placeholder={this.state.thumbSrcSmall} src={this.state.thumbSrcNormal} blur={2} opacity={1} transition="all 1s linear" style={{
                backgroundSize: 'cover',
                backgroundPosition:'center'
              }}/>
            }
          </div>
            <Link to={'/'+post.slug + '--' + post.id}>
              <CardTitle><h3 dangerouslySetInnerHTML={this.createMarkup(post.title.rendered)}></h3></CardTitle>
            </Link>
        </Card>
      </article>
    );
  }
})

export default CategorieBlockPost
