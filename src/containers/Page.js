import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class'
import {fetchPage} from '../actions/page'
import {fetchThumb} from '../actions/fetchThumb'
import Menu from './Menu'
import ProgressiveImage from 'react-progressive-bg-image';

const Page = createReactClass({
  componentWillMount: function() {
    const {fetchPage} = this.props
    const {id} = this.props.match.params;
    fetchPage(id)
  },
  createMarkup(html) {
    return {__html: html};
  },
  pageTitle(title){
    document.title = title;
  },
  render() {
    const {
      pageContent,
      pageTitle,
      pageThumb,
      pageDate,
      thumbFetching,
      thumbSrcSmall,
      thumbSrcNormal,
      fetchThumb
    } = this.props
    fetchThumb(pageThumb)
    return (
      <div className="page align-center">
        <article className="single-post mdl-cell mdl-cell--8-col">
          <div className="mdl-shadow--4dp mdl-card">
            {/*Thumbnail*/}
            <div className="thumbnail">
              {thumbFetching
                ? <div style={{
                    backgroundColor: '#ccc',
                    height: '100%',
                    width: '100%'
                  }}></div>
                : <ProgressiveImage placeholder={thumbSrcSmall} src={thumbSrcNormal} blur={2} opacity={1} transition="all 1s linear" style={{
                  backgroundSize: 'cover'
                }}/>
}
            </div>
            {/*Post meta*/}
            <div className="post-meta">
              <h1 className="title" dangerouslySetInnerHTML={this.createMarkup(pageTitle.rendered)}></h1>
              {this.pageTitle(pageTitle.rendered)}
              <span className="mdl-card__subtitle-text">{pageDate}</span>
            </div>
            {/*Post content*/}
            <div className="inner-content" dangerouslySetInnerHTML={this.createMarkup(pageContent.rendered)}></div>
          </div>
        </article>
      </div>
    )
  }
})

Page.PropTypes = {
  pageContent: PropTypes.object.isRequired,
  pageTitle: PropTypes.object.isRequired,
  thumbSrcSmall: PropTypes.string.isRequired,
  thumbSrcNormal: PropTypes.string.isRequired,
  pageDate: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  return {
    pageContent: state.page.pageContent,
    pageTitle: state.page.pageTitle,
    pageDate: state.page.pageDate,
    pageThumb: state.page.pageThumb,
    thumbSrcSmall: state.fetchThumb.thumbSrcSmall,
    thumbSrcNormal: state.fetchThumb.thumbSrcNormal,
    thumbFetching: state.fetchThumb.fetching,
    relatedPosts: state.fetchSinglePost.relatedPosts
  }
}

export default connect(mapStateToProps, {fetchPage,fetchThumb})(Page)
