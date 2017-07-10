import axios from 'axios';
import { WP_URL } from '../wp-url';

const POSTS_PER_PAGE = 10;
export const FETCH_POSTS = 'FETCH_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR"

export function fetchPosts(filter) {
   return function (dispatch) {
    return axios.get(WP_URL + '/posts'+filter)
      .then((response) => {
        dispatch(receivePosts(response))
      })
      .catch((err) => {
      return {type: FETCH_POSTS_ERROR, payload: err}
      })
   }
}

export function receivePosts(response) {
    return {
        type: RECEIVE_POSTS,
        payload: {
            posts: response.data
        }
    };
}
