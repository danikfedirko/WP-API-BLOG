import React from 'react'
import {connect} from 'react-redux';
import createReactClass from 'create-react-class'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {fetchTitle} from '../actions/title'
import {fetchMainMenu} from '../actions/mainMenu'
import {URL} from '../wp-url';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import {Menu as MenuList} from 'material-ui/Menu';
import SearchHandler from '../containers/SearchHandler'
import Drawer from 'material-ui/Drawer';

var Menu = createReactClass({
  componentWillMount: function() {
    const {fetchTitle, fetchMainMenu} = this.props
    fetchTitle()
    fetchMainMenu()
  },
  getInitialState: function() {
    return {
      open: false
    };
  },
  componentDidMount(){
    document.title = this.props.websiteTitle
  },
  showDropdown(menu_item) {
    if (menu_item.children != undefined && Object.keys(menu_item.children).length > 0) {
      {/* dropdown */}
      return (
        <MenuItem
            onTouchTap={this.handleClose}
            primaryText={menu_item.title}
            rightIcon={<i className="material-icons">more_vert</i>}
            menuItems={this.menuItems(menu_item)}
        >
        </MenuItem>
      )
    }
    else return(<MenuItem
        onTouchTap={this.handleClose}
        primaryText={menu_item.title}>
    </MenuItem>)
  },
  menuItems(menu_item){
    var menuItems = []
    menu_item.children.map(dropdown_item =>
    (menu_item.object_slug === 'rubriki') ?
    menuItems.push(<Link to={'/' + dropdown_item.url.replace(URL,'').slice(0, -1) + '--' + dropdown_item.object_id}>
        <MenuItem primaryText={dropdown_item.title}>
        </MenuItem>
      </Link>)
    :
    menuItems.push(<Link to={'/pages/' + dropdown_item.object_slug + '--' + dropdown_item.object_id}><MenuItem primaryText={dropdown_item.title}>
  </MenuItem></Link>)
)
return menuItems
  },
  menuItemLink(menu_item) {
    var menuItemLink = ''
    return (menuItemLink = (menu_item.url.length > 14)
      ? menu_item.object_slug
      : '#')
  },
  handleToggle(){
    this.setState({open: !this.state.open});
  },
  handleClose(){
    this.setState({open: false});
  },
  render() {
    const {websiteTitle, items, menuFetching} = this.props
    return (
      <div className="nav">
        { menuFetching ?
            <div></div>
          :
          <div>
        <AppBar title={<Link to='/'>{websiteTitle}</Link>}
          style={{backgroundColor:'transparent',boxShadow:'none'}}
          className="animated fadeInDown mdl-layout__header--transparent"
          onLeftIconButtonTouchTap={this.handleToggle}>
          <div className="mdl-layout__header-row">
            {/* Title */}

            {/* Add spacer, to align navigation to the right */}
            <div className="mdl-layout-spacer"></div>
            {/* Navigation */}
            <nav className="mdl-navigation">
              {items.map(menu_item =>
              <span key={menu_item.id}>
              <Link to={this.menuItemLink(menu_item)}>
                {this.showDropdown(menu_item)}
              </Link>
            </span>
            )
            }
            </nav>
          <SearchHandler/>
          </div>
        </AppBar>
        <Drawer  open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}>
          <span className="mdl-layout-title">
            <Link to="/">{websiteTitle}</Link>
          </span>
          <nav className="mdl-navigation">
            <MenuList>
            {items.map(menu_item =>
            <span key={menu_item.id}>
            <Link to={this.menuItemLink(menu_item)}>
              {this.showDropdown(menu_item)}
            </Link>
          </span>
          )
          }
        </MenuList>
          </nav>
        </Drawer>
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
