import axios from 'axios';
import { WP_URL } from '../wp-url';

export const FETCH_CATEGORIES = "FETCH_CATEGORIES"
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES"
export const FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR'

export function fetchCategories() {
  return function(dispatch){
  dispatch({type: FETCH_CATEGORIES})
  axios.get(WP_URL + '/categories')
  .then(response =>{
    dispatch(receiveCategories(response.data))
  })
  .catch((err) => {
    dispatch({type: FETCH_CATEGORIES_ERROR, err})
  })
}
}

export function receiveCategories(categories) {
  return{
    type:RECEIVE_CATEGORIES,
    categories: categories
  }
}
