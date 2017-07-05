import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class'
import {fetchSinglePost} from '../actions/singlePost'
import {fetchThumb} from '../actions/fetchThumb'
import Menu from './Menu'

const SinglePost = createReactClass({
  componentWillMount: function() {
    const {fetchSinglePost} = this.props
    const {id} = this.props.match.params;
    fetchSinglePost(id)
  },
  createMarkup(html) {
    return {__html: html};
  },
  render() {
    const {postContent, postTitle, postThumb, postDate, thumbSrc, fetchThumb} = this.props
    fetchThumb(postThumb)
    return (
      <div className="post single">
        <Menu/>
        <div className="primary mdl-grid">
        <article className="single-post mdl-cell mdl-cell--8-col">
          <div className="mdl-shadow--4dp">
            <div className="thumbnail">
              <img src={thumbSrc}/>
            </div>
            <h1 className="title">{postTitle.rendered}</h1>
            <span className="mdl-card__subtitle-text">{postDate}</span>
            <div className="inner-content" dangerouslySetInnerHTML={this.createMarkup(postContent.rendered)}></div>
          </div>
        </article>
        <aside className="mdl-cell mdl-cell--4-col">
          <div className="mdl-card mdl-shadow--4dp">
          </div>
        </aside>
      </div>
      </div>
    )
  }
})

SinglePost.PropTypes = {
  postContent: PropTypes.object.isRequired,
  postTitle: PropTypes.object.isRequired,
  thumbSrc: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  return {
    postContent: state.fetchSinglePost.postContent,
    postTitle: state.fetchSinglePost.postTitle,
    postDate: state.fetchSinglePost.postDate,
    postThumb: state.fetchSinglePost.postThumb,
    thumbSrc: state.fetchThumb.thumbSrc
  }
}

export default connect(mapStateToProps, {fetchSinglePost,fetchThumb})(SinglePost)
