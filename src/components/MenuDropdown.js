import React from 'react'
import createReactClass from 'create-react-class'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

var MenuDropdown = createReactClass({
  getInitialState() {
    return {
      toggle: false
    };
  },
  toggleMenuDropdown: function(e){
    e.preventDefault()
    const currentState = this.state.toggle
    this.setState({
      toggle: !currentState
    })
  },
  render() {
    const {menu_item} = this.props
    return (
      <span>
        <button id="demo-menu-lower-left" className="mdl-button mdl-js-button mdl-button--icon" onClick={this.toggleMenuDropdown}>
          <i className="material-icons">more_vert</i>
        </button>
        {this.state.toggle ?
        <div id={menu_item.id} className="mdl-menu__container is-upgraded is-visible">
          <div className="mdl-menu__outline mdl-menu--top-left" style={{width: '124px', height: '160px'}}>
            <ul className="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect" data-upgraded=",MaterialMenu,MaterialRipple" style={{
              clip: 'rect(0px 124px 160px 0px)'
            }}>
              {menu_item.children.map(dropdown_item => <li className="mdl-menu__item" key={dropdown_item.id}>
                <Link to={dropdown_item.url.replace(URL, '')}>{dropdown_item.title}</Link>
              </li>)}
            </ul>
          </div>
        </div>
        : <div></div>
        }
      </span>
    );
  }

});

export default MenuDropdown
