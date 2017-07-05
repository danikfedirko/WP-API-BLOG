import axios from 'axios';
import { WP_URL } from '../wp-url';

const CATEGORIE_POSTS_PER_PAGE = 10;
export const FETCH_CATEGORIE_POSTS = 'FETCH_CATEGORIE_POSTS'
export const RECEIVE_CATEGORIE_POSTS = 'RECEIVE_CATEGORIE_POSTS'
export const FETCH_CATEGORIE_POSTS_ERROR = "FETCH_CATEGORIE_POSTS_ERROR"

export function fetchCategoriePosts(categorie) {
   return function (dispatch) {
    return axios.get(WP_URL + '/posts?filter[posts_per_page]=6&fiter[category_name]='+categorie.name)
      .then((response) => {
        dispatch(receiveCategoriePosts(response.data))
      })
      .catch((err) => {
      dispatch({type: FETCH_CATEGORIE_POSTS_ERROR, payload: err})
      })
   }
}

export function receiveCategoriePosts(posts) {
    return {
        type: RECEIVE_CATEGORIE_POSTS,
        payload: {
            posts: posts
        }
    }
}
