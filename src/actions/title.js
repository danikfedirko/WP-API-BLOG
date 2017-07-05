import axios from 'axios';
import { WP_URL_UNI } from '../wp-url';

export const FETCH_TITLE = "FETCH_TITLE"
export const FETCH_TITLE_ERROR = "FETCH_TITLE_ERROR"
export const RECEIVE_TITLE = "RECEIVE_TITLE"


export function fetchTitle() {
  return function(dispatch) {
    axios.get(WP_URL_UNI)
    .then(response => {
      dispatch(receiveWebsiteTitle(response.data.name))
    })
    .catch((err) => {
      dispatch({type:FETCH_TITLE_ERROR,payload:err});
    })
  }
}

export function receiveWebsiteTitle(title) {
  return{
    type: RECEIVE_TITLE,
    payload:{
      websiteTitle: title
    }
   }
}
