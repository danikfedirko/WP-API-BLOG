import React, { PropTypes } from 'react'
import createReactClass from 'create-react-class'
import { connect } from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom'

  const CategorieBlockPost = createReactClass({
    getInitialState: function() {
      return {
        thumbSrc: ''
      };
    },
    componentWillMount: function() {
      const {featuredmedia} = this.props
      axios.get(featuredmedia)
        .then((response) => {
          this.setState(function() {
            return{
              thumbSrc: response.data.source_url
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
            <div className="post-thumbnail mdl-card--expand" style={{backgroundImage:'url('+this.state.thumbSrc+')',backgroundSize:'cover'}}>
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
