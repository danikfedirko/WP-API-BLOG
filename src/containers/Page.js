import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class'
import {fetchPage} from '../actions/page'
import {fetchThumb} from '../actions/fetchThumb'
import Menu from './Menu'
import ProgressiveImage from 'react-progressive-bg-image';
import {Card, CardTitle, CardText} from 'material-ui/Card'

const Page = createReactClass({
  componentWillMount: function() {
    const {fetchPage} = this.props
    const {id} = this.props.match.params;
    fetchPage(id)
  },
  createMarkup(html) {
    return {__html: html};
  },
  componentDidMount: function() {
      document.title = this.props.pageTitle;
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
      fetchThumb,
      pageFetching
    } = this.props
    fetchThumb(pageThumb)
    return (
        <article className="single-post mdl-cell mdl-cell--8-col">
          { pageFetching ?
            <div className="preloader"/>
            :
          <Card className="card">
            {/*Thumbnail*/}
              {thumbFetching
                ? <ProgressiveImage className="thumbnail" placeholder={thumbSrcSmall} src={thumbSrcNormal} blur={2} opacity={1} transition="all 1s linear" style={{
                  backgroundSize: 'cover',
                  backgroundPosition:'center'
                }}/>
                :
                <div style={{
                    backgroundColor: '#ccc',
                    height: '20em',
                    width: '100%'
                  }}></div>
                }
            {/*Post meta*/}
            <div className="post-meta">
              <CardTitle subtitle={pageDate}><h1 className="title" dangerouslySetInnerHTML={this.createMarkup(pageTitle.rendered)}></h1></CardTitle>
            </div>
            {/*Post content*/}
            <CardText className="inner-content" dangerouslySetInnerHTML={this.createMarkup(pageContent.rendered)}/>
          </Card>
        }
        </article>
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
    pageFetching: state.page.fetching,
    pageTitle: state.page.pageTitle,
    pageDate: state.page.pageDate,
    pageThumb: state.page.pageThumb,
    thumbSrcSmall: state.fetchThumb.thumbSrcSmall,
    thumbSrcNormal: state.fetchThumb.thumbSrcNormal,
    thumbFetching: state.fetchThumb.fetched,
    relatedPosts: state.fetchSinglePost.relatedPosts
  }
}

export default connect(mapStateToProps, {fetchPage,fetchThumb})(Page)
