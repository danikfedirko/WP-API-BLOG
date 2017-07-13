import React from 'react'
import Dialog from 'material-ui/Dialog';
import {List, ListItem} from 'material-ui/List';

const Popup = React.createClass({
  componentDidMount: function() {
    var popup = this.getCookie("popup")
    var _this = this
    if (popup != 'seen') {
      this.setCookie("popup","seen",7)
      setTimeout(function() {
        _this.handleOpen()
      },4000)
    }
  },
  setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
},
   getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
},
  getInitialState: function() {
    return {open: false};
  },
  handleOpen() {
    this.setState({open: true});
  },
  handleClose() {
    this.setState({open: false});
  },
  render() {
    return (
      <Dialog title="Подпишись на меня в соц сетях" open={this.state.open} onRequestClose={this.handleClose}>
        <List>
      <ListItem>
          <a href="http://t.me/danikfedirko_blog" target="_blank">Telegram</a>
      </ListItem>
      <ListItem>
          <a href="http://vk.com/danikfedirko_blog" target="_blank">VK</a>
      </ListItem>
      <ListItem>
          <a href="http://instagram.com/danikfedirko" target="_blank">Instagram</a>
      </ListItem>

    </List>
      </Dialog>
    )
  }
})

export default Popup
