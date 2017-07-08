import React, { PropTypes } from 'react'
import createReactClass from 'create-react-class'
import { connect } from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom'
import ProgressiveImage from 'react-progressive-bg-image';

  const CategorieBlockPost = createReactClass({
    getInitialState: function() {
      return {
        thumbFetching: true,
        thumbSrcSmall: '',
        thumbSrcNormal:''
      };
    },
    componentWillMount: function() {
      const {featuredmedia} = this.props
      axios.get(featuredmedia)
        .then((response) => {
          const m_sizes = response.data["media_details"].sizes
          this.setState(function() {
            return{
              thumbFetching:false,
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
              <div className="post-thumbnail mdl-card--expand">
                {this.state.thumbFetching ?
                  <div style={{backgroundColor:'#ccc',height:'10em'}}></div>
                :
                 <ProgressiveImage
                  placeholder={this.state.thumbSrcSmall}
                  src={this.state.thumbSrcNormal}
                  blur={2}
                  opacity={1}
                  transition="all 1s linear"
                  style={{
                    backgroundSize: 'cover'
                  }}
                  />
              }
              </div>
            <Link to={{ pathname:post.slug+'--'+post.id, query: { id: post.id } }}><h4>{post.title.rendered}</h4></Link>
            <div className="mdl-card__actions mdl-card--border">
              <Link className="mdl-button mdl-js-button" to={{ pathname:post.slug+'--'+post.id, query: { id: post.id } }}>
                Read more
              </Link>
            </div>
          </div>
          </article>
        );
  }
  })

  export default CategorieBlockPost
