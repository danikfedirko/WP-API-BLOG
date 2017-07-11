import React, {PropTypes} from 'react'
import createReactClass from 'create-react-class'
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom'
import ProgressiveImage from 'react-progressive-bg-image';
import ReadMoreButton from './ReadMoreButton'

const CategorieBlockPost = createReactClass({
  getInitialState: function() {
    return {thumbFetching: true, thumbSrcSmall: '', thumbSrcNormal: ''};
  },
  componentWillMount: function() {
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
        <div className="mdl-card mdl-shadow--2dp">
          <div className="post-thumbnail mdl-card--expand">
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
          <div className="mdl-card__supporting-text">
            <Link to={{
              pathname: post.slug + '--' + post.id,
              query: {
                id: post.id
              }
            }}>
              <h4 dangerouslySetInnerHTML={this.createMarkup(post.title.rendered)}></h4>
            </Link>
          </div>

        </div>
      </article>
    );
  }
})

export default CategorieBlockPost
