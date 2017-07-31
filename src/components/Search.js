import React from 'react'
import {Link} from 'react-router-dom'
import createReactClass from 'create-react-class'
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const Search = createReactClass({
  getInitialState: function() {
    return {
      textFieldStyle: {}
    };
  },
  componentDidMount: function() {
    const mq = window.matchMedia( "(max-width: 768px)" );
    if (mq.matches) {
        this.setState({
          textFieldStyle:{
            display:'none'
          }
        })
  } else {

  }
  },
  toggleSearch(){
    const mq = window.matchMedia( "(max-width: 768px)" );
    if (mq.matches) {
        this.setState({
          textFieldStyle:{
            display:'block',
            position: 'absolute',
            right: '5em'
          }
        })
  } else {

  }
},
  render () {
    var buttonStyle ={
      boxShadow:'none'
    }
    return (
      <form className="search-form" onSubmit={this.props.onSubmitSearch}>
          <Link style={{display:'inline-block',verticalAlign:'bottom'}} to={"/search/"+this.props.searchWord}>
            <FloatingActionButton onClick={this.toggleSearch} type="submit" mini={true} iconStyle={{color:'#333'}} backgroundColor='transparent' style={buttonStyle}>
            <i className="material-icons">search</i>
            </FloatingActionButton>
          </Link>
          <TextField type="text"
            onChange={this.props.onUpdateSearch}
            value={this.props.searchWord}
            hintText="Поиск"
            style={this.state.textFieldStyle}/>
      </form>
    )
  }
})

export default Search
