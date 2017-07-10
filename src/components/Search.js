import React from 'react'
import {Link} from 'react-router-dom'
import createReactClass from 'create-react-class'

const Search = createReactClass({
  render () {
    return (
      <form onSubmit={this.props.onSubmitSearch}>
        <label className="mdl-button mdl-js-button mdl-button--icon">
          <Link to={"/search/"+this.props.searchWord}>
            <button type="submit">
            <i className="material-icons">search</i>
            </button>
          </Link>
        </label>
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="text"
            onChange={this.props.onUpdateSearch}
            value={this.props.searchWord}/>
          <label className="mdl-textfield__label">Search</label>
        </div>
      </form>
    )
  }
})

export default Search
