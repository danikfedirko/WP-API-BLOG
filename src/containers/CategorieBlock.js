import React, {Component} from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {fetchCategoriePosts} from '../actions/categoriePosts'
import ArchivePost from '../components/ArchivePost';

const CategorieBlock = createReactClass({
  buildPosts(posts) {
      return posts.map(post =>
          <ArchivePost post={post} key={post.id} featuredmedia={post._links["wp:featuredmedia"][0].href}/>
      );
  },
  render() {
    const {categorie, categoriePosts, fetchCategoriePosts} = this.props
    fetchCategoriePosts(categorie)
    return (
      <div>
        <div className="categorie-title">
          <h3>{categorie.name}</h3>
        </div>
        <div className="">
          {this.buildPosts(categoriePosts)}
        </div>
      </div>
    )
  }
})

function mapStateToProps(state) {
  return{
    categoriePosts: state.categoriePosts.posts
  }
}

export default connect(mapStateToProps, {fetchCategoriePosts})(CategorieBlock)
