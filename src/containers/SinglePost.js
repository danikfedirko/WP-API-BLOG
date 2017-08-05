import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class'
import {fetchSinglePost} from '../actions/singlePost'
import {fetchThumb} from '../actions/fetchThumb'
import Menu from './Menu'
import RelatedPost from '../components/RelatedPost'
import SidebarHomePage from './SidebarHomePage'
import Title from '../components/Title'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import ProgressiveImage from 'react-progressive-bg-image';
import SocialShare from '../components/SocialShare'

const SinglePost = createReactClass({
  componentWillMount: function() {
    const {fetchSinglePost} = this.props
    const {id} = this.props.match.params;
    fetchSinglePost(id)
  },
  createMarkup(html) {
    return {__html: html};
  },
  componentDidMount() {
    document.title = this.props.postTitle;
  },
  render() {
    const {
      postFetching,
      postContent,
      postTitle,
      postThumb,
      postDate,
      thumbFetching,
      thumbSrcSmall,
      thumbSrcNormal,
      fetchThumb,
      relatedPosts
    } = this.props
    fetchThumb(postThumb)
    return (
      <div className="post single mdl-cell mdl-cell--8-col">
        <Title title={postTitle}/>
        <div className="primary">
          <article className="single-post">
            <Card className="card">
              {/*Thumbnail*/}
              <div className="thumbnail">
                {thumbFetching
                  ? <ProgressiveImage placeholder={thumbSrcSmall} src={thumbSrcNormal} blur={2} opacity={1} transition="all 1s linear" style={{
                      backgroundSize: 'cover',
                      backgroundPosition:'center'
                    }}/>
                  : <div style={{
                    backgroundColor: '#ccc',
                    height: '100%',
                    width: '100%'
                  }}></div>
}
              </div>
          {postFetching
            ?
                <div className="preloader"></div>
            :
              <div className="inner-content">
                {/*Post meta*/}
                <div className="post-meta">
                  <CardTitle subtitle={postDate}>
                    <h1 className="title" dangerouslySetInnerHTML={this.createMarkup(postTitle.rendered)}></h1>
                  </CardTitle>
                </div>
                {/*Post content*/}
                <CardText dangerouslySetInnerHTML={this.createMarkup(postContent.rendered)}/>
                <SocialShare/>
                </div>
                }
              </Card>
              <div className="relatedPosts">
                {/*Related Posts*/}
                {relatedPosts.map(post => {
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
    postFetching: state.fetchSinglePost.fetching,
    postContent: state.fetchSinglePost.postContent,
    postTitle: state.fetchSinglePost.postTitle,
    postDate: state.fetchSinglePost.postDate,
    postThumb: state.fetchSinglePost.postThumb,
    thumbSrcSmall: state.fetchThumb.thumbSrcSmall,
    thumbSrcNormal: state.fetchThumb.thumbSrcNormal,
    thumbFetching: state.fetchThumb.fetched,
    relatedPosts: state.fetchSinglePost.relatedPosts
  }
}

export default connect(mapStateToProps, {fetchSinglePost, fetchThumb})(SinglePost)
