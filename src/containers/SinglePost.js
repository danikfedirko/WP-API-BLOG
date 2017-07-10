import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class'
import {fetchSinglePost} from '../actions/singlePost'
import {fetchThumb} from '../actions/fetchThumb'
import Menu from './Menu'
import RelatedPost from '../components/RelatedPost'
import SidebarHomePage from './SidebarHomePage'
import ProgressiveImage from 'react-progressive-bg-image';

const SinglePost = createReactClass({
  componentWillMount: function() {
    const {fetchSinglePost} = this.props
    const {id} = this.props.match.params;
    fetchSinglePost(id)
  },
  createMarkup(html) {
    return {__html: html};
  },
  postTitle(title){
    document.title = title;
  },
  render() {
    const {postContent, postTitle, postThumb, postDate,thumbFetching, thumbSrcSmall,thumbSrcNormal, fetchThumb, relatedPosts} = this.props
    fetchThumb(postThumb)
    return (
      <div className="post single mdl-cell mdl-cell--8-col">
        <div className="primary">
        <article className="single-post">
          <div className="mdl-shadow--4dp mdl-card">
            {/*Thumbnail*/}
            <div className="thumbnail">
              {thumbFetching ?
                <div style={{backgroundColor:'#ccc',height:'100%',width:'100%'}}></div>
                :
              <ProgressiveImage
               placeholder={thumbSrcSmall}
               src={thumbSrcNormal}
               blur={2}
               opacity={1}
               transition="all 1s linear"
               style={{
                 backgroundSize: 'cover'
               }}
               />
           }
            </div>
            {/*Post meta*/}
            <div className="post-meta">
              <h1 className="title" dangerouslySetInnerHTML={this.createMarkup(postTitle.rendered)}></h1>
              {this.postTitle(postTitle.rendered)}
              <span className="mdl-card__subtitle-text">{postDate}</span>
            </div>
            {/*Post content*/}
            <div className="inner-content" dangerouslySetInnerHTML={this.createMarkup(postContent.rendered)}></div>
          </div>
          <div className="relatedPosts">
          {/*Related Posts*/}
          {relatedPosts.map(post =>{
            return <RelatedPost post={post} thumbSrc={post.img.src}/>
          })}
        </div>
        </article>
      </div>
      </div>
    )
  }
})

SinglePost.PropTypes = {
  postContent: PropTypes.object.isRequired,
  postTitle: PropTypes.object.isRequired,
  thumbSrcSmall: PropTypes.string.isRequired,
  thumbSrcNormal: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
  relatedPosts: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    postContent: state.fetchSinglePost.postContent,
    postTitle: state.fetchSinglePost.postTitle,
    postDate: state.fetchSinglePost.postDate,
    postThumb: state.fetchSinglePost.postThumb,
    thumbSrcSmall: state.fetchThumb.thumbSrcSmall,
    thumbSrcNormal: state.fetchThumb.thumbSrcNormal,
    thumbFetching:state.fetchThumb.fetching,
    relatedPosts: state.fetchSinglePost.relatedPosts
  }
}

export default connect(mapStateToProps, {fetchSinglePost,fetchThumb})(SinglePost)
