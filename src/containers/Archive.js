import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import {Link} from 'react-router-dom'
import ArchivePost from '../components/ArchivePost';
import {GridList} from 'material-ui/GridList';

const Archive = createReactClass ({
    componentWillMount() {
        const {fetchPosts, pageNum = 1, location, match} = this.props
        if(location.pathname.includes('category')){
        fetchPosts('?categories=' + match.params.id + '&per_page=10&orderby=date')
      }
      else if(location.pathname.includes('search')){
      fetchPosts('?search=' + match.params.searchWord + '&per_page=10&orderby=date')
    }
    },
    buildPosts(posts) {
        return posts.map(post =>
            <ArchivePost post={post} key={post.id} featuredmedia={post._links["wp:featuredmedia"][0].href}/>
        );
    },

    handlePaginationClick(pageNum) {
      const {fetchPosts, location, match} = this.props
      window.scrollTo(0, 0);
      if(location.pathname.includes('category')){
      fetchPosts('?categories=' + match.params.id + '&per_page=10&page='+pageNum+'&orderby=date', pageNum)
    }
    else if(location.pathname.includes('search')){
    fetchPosts('?search=' + match.params.searchWord + '&per_page=10&page='+pageNum+'&orderby=date', pageNum)
  }
    },

    buildPagination(pageNum, totalPages) {
        const prevText = <i className="material-icons">keyboard_arrow_left</i>;
        const nextText = <i className="material-icons">keyboard_arrow_right</i>;

        let prevLink = {
            link: <a className="prev">{prevText}</a>,
            enabled: false
        };

        let nextLink = {
            link: <Link className="next" to={this.props.location.pathname} onClick={() => this.handlePaginationClick(pageNum + 1)}>{nextText}</Link>,
            enabled: true
        };

        if (pageNum > 1 && pageNum < totalPages) {
            prevLink.link = <Link className="prev" to={this.props.location.pathname} onClick={() => this.handlePaginationClick(pageNum - 1)}>{prevText}</Link>;
            prevLink.enabled = true;
        } else if (pageNum == totalPages) {
            nextLink.link = <a className="next">{nextText}</a>;
            nextLink.enabled = false;

            prevLink.link = <Link className="prev" to={this.props.location.pathname} onClick={() => this.handlePaginationClick(pageNum - 1)}>{prevText}</Link>;
            prevLink.enabled = true;
        }

        return (
                <ul className="pager">
                    {[prevLink, nextLink].map((link, index) =>
                        <li key={index} className={link.enabled ? "" : "disabled"}>
                            {link.link}
                        </li>
                    )}
                </ul>
        );
    },

    render() {
        const { posts, totalPages, pageNum = 1, fetching } = this.props;

        return (
            <div className="mdl-cell mdl-cell--8-col">
              { fetching ?
                  <div className="preloader"/>
                :
              <div>
                { (posts.length > 0) ?
              <div className="article-listing">
                {this.buildPosts(posts)}
                {this.buildPagination(parseInt(pageNum), totalPages)}
              </div>
                : <h3>Ничего не найдено</h3>
                }
              </div>

              }
            </div>
        );
    }
})

Archive.PropTypes={
  posts: PropTypes.array.isRequired,
  totalPages: PropTypes.number.isRequired,
  pageNum: PropTypes.number.isRequired
}

function mapStateToProps(state) {
    return {
       fetching:state.posts.fetching,
        posts: state.posts.posts,
        pageNum: state.posts.pageNum,
        totalPages: state.posts.totalPages
    };
}

export default connect(
    mapStateToProps,
    { fetchPosts }
)(Archive);
