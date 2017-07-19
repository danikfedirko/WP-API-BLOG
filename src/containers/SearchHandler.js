import React, {PropTypes} from 'react'
import Search from '../components/Search'
import {fetchPosts} from '../actions/posts';
import {connect} from 'react-redux';
import createReactClass from 'create-react-class'

var history = createHistory()

const SearchHandler = createReactClass({
  getInitialState() {
    return {searchWord: ''}
  },
  handleUpdateSearch(event) {
    const {fetchPosts} = this.props
    this.setState({searchWord: event.target.value})
    event.preventDefault();
    fetchPosts('?search=' + event.target.value + '&per_page=10&orderby=date');
    
  },
  render() {
    return (
      <Search
        onSubmitSearch={this.handleSubmitSearch}
        onUpdateSearch={this.handleUpdateSearch}
        searchWord={this.state.searchWord}/>);
      }
 })

function mapStateToProps(state) {
  return {}
  }

export default connect(mapStateToProps, {fetchPosts})(SearchHandler);
