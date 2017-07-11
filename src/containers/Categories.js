import React from 'react'
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class'
import { connect } from 'react-redux';
import CategorieBlock from './CategorieBlock'
import {fetchCategories} from '../actions/categories'

const Categories = createReactClass({
  componentWillMount: function() {
    const {fetchCategories} = this.props
    fetchCategories()
  },
  render () {
    const {categories} = this.props
    return (
      <div className="categories-list">
        {categories.map(categorie => {
          return <CategorieBlock key={categorie.id} categorie={categorie}/>
        })}

      </div>
    )
  }
})

function mapStateToProps(state) {
  return{
    categories:state.categories.categories
  }
}

Categories.PropTypes = {
  categories: PropTypes.array.isRequired
}

export default connect(
  mapStateToProps,
  {fetchCategories}
)(Categories)
