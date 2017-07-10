import axios from 'axios';
import { WP_URL } from '../wp-url';

export const FETCH_PAGE = 'FETCH_PAGE'
export const RECEIVE_PAGE = 'RECEIVE_PAGE'
export const FETCH_PAGE_ERROR = 'FETCH_PAGE_ERROR'

export function fetchPage(id) {
return function(dispatch) {
    dispatch({type: FETCH_PAGE})
    axios.get(WP_URL + '/pages/'+id)
      .then((response) => {
        dispatch(receivePage(response.data))
      })
      .catch((err) => {
        dispatch({type: FETCH_PAGE_ERROR, payload: err})
      })
  }
}

export function receivePage(pageData) {
    return {
        type: RECEIVE_PAGE,
        payload: {
            pageContent:pageData.content,
            pageTitle: pageData.title,
            pageThumb:pageData._links["wp:featuredmedia"][0].href,
            pageDate: pageData.date
        }
    };
}
