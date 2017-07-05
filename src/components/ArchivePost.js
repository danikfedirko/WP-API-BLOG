import React, { PropTypes } from 'react'
import createReactClass from 'create-react-class'
import { connect } from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom'

  const ArchivePost = createReactClass({
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
          <article className="mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title mdl-card--expand" style={{backgroundImage:'url('+this.state.thumbSrc+')'}}>

              <h2 className="mdl-card__title-text">{post.title.rendered}</h2>
            </div>
            <div className="mdl-card__supporting-text" dangerouslySetInnerHTML={this.createMarkup(post.excerpt.rendered)}>

            </div>
            <div className="mdl-card__supporting-text">
              {post.author.first_name}
            </div>
            <div className="mdl-card__actions mdl-card--border">
              <Link className="mdl-button mdl-js-button mdl-button--raised" to={{ pathname:post.slug+'--'+post.id, query: { id: post.id } }}>
                Read more
              </Link>
            </div>
          </article>
        );
  }
  })

  export default ArchivePost
