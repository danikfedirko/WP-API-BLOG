import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import {Link} from 'react-router-dom'
import ArchivePost from '../components/ArchivePost';

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
        this.props.fetchPosts(pageNum, 10);
    },

    buildPagination(pageNum, totalPages) {
        const prevText = "Previous";
        const nextText = "Next";

        let prevLink = {
            link: <a>{prevText}</a>,
            enabled: false
        };

        let nextLink = {
            link: <Link to="/" onClick={() => this.handlePaginationClick(pageNum + 1)}>{nextText}</Link>,
            enabled: true
        };

        if (pageNum > 1 && pageNum < totalPages) {
            prevLink.link = <Link to="/" onClick={() => this.handlePaginationClick(pageNum - 1)}>{prevText}</Link>;
            prevLink.enabled = true;
        } else if (pageNum == totalPages) {
            nextLink.link = <a>{nextText}</a>;
            nextLink.enabled = false;

            prevLink.link = <Link to="/" onClick={() => this.handlePaginationClick(pageNum - 1)}>{prevText}</Link>;
            prevLink.enabled = true;
        }

        return (
            <nav>
                <ul className="pager">
                    {[prevLink, nextLink].map((link, index) =>
                        <li key={index} className={link.enabled ? "" : "disabled"}>
                            {link.link}
                        </li>
                    )}
                </ul>
            </nav>
        );
    },

    render() {
        const { posts, totalPages, pageNum = 1 } = this.props;

        return (
            <div className="article-listing mdl-cell mdl-cell--8-col">
                {this.buildPosts(posts)}
                {this.buildPagination(parseInt(pageNum), totalPages)}
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
        posts: state.posts.posts,
        pageNum: state.posts.pageNum,
        totalPages: state.posts.totalPages
    };
}

export default connect(
    mapStateToProps,
    { fetchPosts }
)(Archive);
