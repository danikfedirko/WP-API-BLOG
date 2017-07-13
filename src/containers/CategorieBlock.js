import React, {Component} from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class'
import axios from 'axios';
import {WP_URL} from '../wp-url';
import {Link} from 'react-router-dom'
import CategorieBlockPost from '../components/CategorieBlockPost';

const CategorieBlock = createReactClass({
  getInitialState: function() {
    return {
      categoriePosts: [],
      fetching:false
    };
  },
  buildPosts(categorie) {
    this.setState({fetching:true});
    axios.get(WP_URL + '/posts?categories=' + categorie.id + '&per_page=6&orderby=date')
    .then((response) => {
      this.setState({categoriePosts: response.data,fetching:false})
    })
  },
  componentDidMount: function() {
    const {categorie} = this.props
    this.buildPosts(categorie)
  },
  render() {
    const {categorie, categoriePosts} = this.props
    return (
      <div className="categorie-block box no-cursor">
        <div className="categorie-title animated fadeIn">
          <Link to={'category/'+categorie.slug+'--'+categorie.id}><h3>{categorie.name}</h3></Link>
        </div>
        <div className="categorie-posts">
          { this.state.fetching ?
            <div className="preloader"></div>
            :
          this.state.categoriePosts.map(post =>  {
            return <CategorieBlockPost post={post} key={post.id} featuredmedia={post._links["wp:featuredmedia"][0].href}/>
          })

        }
        </div>
      </div>
    )
  }
})

export default CategorieBlock
