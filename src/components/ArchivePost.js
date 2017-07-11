import React, { PropTypes } from 'react'
import createReactClass from 'create-react-class'
import { connect } from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom'
import ProgressiveImage from 'react-progressive-bg-image';
import ReadMoreButton from './ReadMoreButton'

  const ArchivePost = createReactClass({
    getInitialState: function() {
      return {thumbFetching: true, thumbSrcSmall: '', thumbSrcNormal: ''};
    },
    componentWillMount: function() {
      const {featuredmedia} = this.props
      axios.get(featuredmedia).then((response) => {
        const m_sizes = response.data["media_details"].sizes
        this.setState(function() {
          return {
            thumbFetching: false,
            thumbSrcSmall: m_sizes.thumbnail.source_url,
            thumbSrcNormal: m_sizes.medium.source_url
          }
        })
      })
    },
    createMarkup(html) {
        return {
            __html: html
        };
    },

    render() {
        const {post, link} = this.props;
        return (
          <article>
            <div className="mdl-card mdl-shadow--2dp">
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
              <div className="mdl-card__supporting-text">
                <Link to={'/' + post.slug + '--' + post.id}>
                <h2 className="mdl-card__title-text">{post.title.rendered}</h2>
              </Link>
              </div>
            <div className="mdl-card__supporting-text" dangerouslySetInnerHTML={this.createMarkup(post.excerpt.rendered)}>
            </div>
            <div className="mdl-card__supporting-text">
              {post.author.first_name}
            </div>
            <div className="mdl-card__actions mdl-card--border">
            <ReadMoreButton post={post}/>
            </div>
          </div>
          </article>
        );
  }
  })

  export default ArchivePost
