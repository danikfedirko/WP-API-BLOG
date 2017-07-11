import React from 'react'
import {connect} from 'react-redux';
import createReactClass from 'create-react-class'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {fetchTitle} from '../actions/title'
import {fetchMainMenu} from '../actions/mainMenu'
import {URL} from '../wp-url';
import MenuDropdown from '../components/MenuDropdown'
import SearchHandler from '../containers/SearchHandler'

var Menu = createReactClass({
  componentWillMount: function() {
    const {fetchTitle, fetchMainMenu} = this.props
    fetchTitle()
    fetchMainMenu()
  },
  pageTitle(title){
    document.title = title
  },
  showDropdown(menu_item) {
    if (menu_item.children != undefined && Object.keys(menu_item.children).length > 0) {
      {/* dropdown */}
      return (
        <MenuDropdown className="mdl-navigation__link" menu_item={menu_item}/>
      )
    }
  },
  menuItemLink(menu_item) {
    var menuItemLink = ''
    return (menuItemLink = (menu_item.url.length > 14)
      ? menu_item.object_slug
      : '#')
  },
  render() {
    const {websiteTitle, items, menuFetching} = this.props
    return (
      <div className="nav">
        { menuFetching ?
            <div></div>
          :
          <div>
        <header className="animated fadeInDown mdl-layout__header mdl-layout__header--transparent">
          <div className="mdl-layout__header-row">
            {/* Title */}
            <span className="mdl-layout-title">
              <Link to="/">{websiteTitle}</Link>
              {this.pageTitle(websiteTitle)}
            </span>
            {/* Add spacer, to align navigation to the right */}
            <div className="mdl-layout-spacer"></div>
            {/* Navigation */}
            <nav className="mdl-navigation">
              {items.map(menu_item =>
              <span key={menu_item.id}>
              <Link className="mdl-navigation__link" to={this.menuItemLink(menu_item)}>
              {menu_item.title}
              </Link>
              {this.showDropdown(menu_item, this)}
            </span>
            )
            }
            </nav>
          <SearchHandler/>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">
            <Link to="/">{websiteTitle}</Link>
          </span>
          <nav className="mdl-navigation">
            {items.map(menu_item => <Link className="mdl-navigation__link" key={menu_item.id} to={menu_item.url}>{menu_item.title}</Link>)}
          </nav>
        </div>
      </div>
      }
      </div>
    )
  }
})

Menu.PropTypes = {
  websiteTitle: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    websiteTitle: state.title.payload.websiteTitle,
    menuFetching:state.mainMenu.payload.fetching,
    items: state.mainMenu.payload.items
  }
}

export default connect(mapStateToProps, {fetchTitle, fetchMainMenu})(Menu)
