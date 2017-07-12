import React, {PropTypes} from 'react'
import createReactClass from 'create-react-class'
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {Card,CardActions,CardMedia,CardTitle,CardText} from 'material-ui/Card';
import ProgressiveImage from 'react-progressive-bg-image';
import ReadMoreButton from './ReadMoreButton'
import Divider from 'material-ui/Divider';

const ArchivePost = createReactClass({
  getInitialState: function() {
    return {thumbFetching: true, thumbSrcSmall: '', thumbSrcNormal: ''};
  },
  componentDidMount: function() {
    const {featuredmedia} = this.props
    axios.get(featuredmedia)
      .then((response) => {
      const m_sizes = response.data["media_details"].sizes
      this.setState(function() {
        return {thumbFetching: false, thumbSrcSmall: m_sizes.thumbnail.source_url, thumbSrcNormal: m_sizes.medium.source_url}
      })
      })
      .catch((err)=>{
        this.setState(function() {
          return {thumbFetching: true}
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
        <Card className="card">
          {this.state.thumbFetching && (this.state.thumbSrcSmall.length === 0) && (this.state.thumbSrcNormal.length === 0)
            ? <div style={{
                backgroundColor: '#ccc',
                height: '10em'
              }}></div>
            :
            <ProgressiveImage placeholder={this.state.thumbSrcSmall} src={this.state.thumbSrcNormal} blur={2} opacity={1} transition="all 1s linear" style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height:'20em'
            }}/>


            }
          <Link to={'/' + post.slug + '--' + post.id}>
            <CardTitle><h3 dangerouslySetInnerHTML={this.createMarkup(post.title.rendered)}></h3></CardTitle>
          </Link>
          <CardText dangerouslySetInnerHTML={this.createMarkup(post.excerpt.rendered)}></CardText>
          <Divider />
            <CardActions>
              <ReadMoreButton post={post}/>
            </CardActions>
        </Card>
      </article>
    );
  }
})

export default ArchivePost
