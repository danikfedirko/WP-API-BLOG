import axios from 'axios';
import { WP_URL } from '../wp-url';

export const FETCH_POST_THUMB = "FETCH_POST_THUMB"
export const RECEIVE_POST_THUMB = "RECEIVE_POST_THUMB"
export const FETCH_POST_THUMB_ERROR = "FETCH_POST_THUMB_ERROR"

export function fetchThumb(featuredmedia) {
    return function (dispatch) {
      axios.get(featuredmedia)
        .then((response) => {
          dispatch(receiveThumb(response.data["media_details"]))
        })
        .catch((err) => {
          dispatch({type: FETCH_POST_THUMB_ERROR, thumbSrc: err})
        })
    }
}

export function receiveThumb(response) {
  return{
    type: RECEIVE_POST_THUMB,
    thumbSizes: response.sizes
  }
}
