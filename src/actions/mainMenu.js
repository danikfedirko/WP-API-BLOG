import axios from 'axios';
import { WP_URL_UNI } from '../wp-url';

export const FETCH_MAIN_MENU = "FETCH_MAIN_MENU"
export const RECEIVE_MAIN_MENU = "RECEIVE_MAIN_MENU"
export const FETCH_MAIN_MENU_ERROR = 'FETCH_MAIN_MENU_ERROR'

export function fetchMainMenu() {
  return function(dispatch) {
    dispatch({type:FETCH_MAIN_MENU})
    axios.get(WP_URL_UNI + '/wp-api-menus/v2/menus')
    .then(response => {
      const menu_id = response.data[0].term_id
      axios.get(WP_URL_UNI + '/wp-api-menus/v2/menus/' + menu_id)
      .then(response => {
        dispatch(receiveMainMenu(response.data))
      })
    })
    .catch((err) => {
      dispatch({type: FETCH_MAIN_MENU_ERROR, payload: err});
    })
  }
}

export function receiveMainMenu(menu) {
  return{
     type: RECEIVE_MAIN_MENU,
     payload:{
       items: menu.items
     }
   }
}
