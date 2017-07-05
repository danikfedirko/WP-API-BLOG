import axios from 'axios';
import { WP_URL_UNI } from '../wp-url';

export const FETCH_SIDEBARS = "FETCH_SIDEBARS"
export const RECEIVE_SIDEBARS = "RECEIVE_SIDEBARS"
export const FETCH_SIDEBARS_ERROR = 'FETCH_SIDEBARS_ERROR'

export function fetchSidebars() {
  var sidebars = []
  return function(dispatch) {
    axios.get(WP_URL_UNI + '/wp-rest-api-sidebars/v1/sidebars')
    .then(response => {
      axios.get(WP_URL_UNI + '/wp-rest-api-sidebars/v1/sidebars/' + response.data[0].id)
      .then(response => {
        dispatch(receiveSidebars(response.data))
      })
    })
    .catch((err) => {
      dispatch({type: FETCH_SIDEBARS_ERROR,err});
    })
  }
}

export function receiveSidebars(sidebar) {
  return{
     type: RECEIVE_SIDEBARS,
     sidebars: sidebar
   }
}
