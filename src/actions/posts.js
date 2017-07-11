import axios from 'axios';
import { WP_URL } from '../wp-url';

const POSTS_PER_PAGE = 10;
export const FETCH_POSTS = 'FETCH_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR"

export function fetchPosts(filter,pageNum) {
   return function (dispatch) {
    dispatch({type: FETCH_POSTS})
    return axios.get(WP_URL + '/posts'+filter)
      .then((response) => {
        dispatch(receivePosts(response,pageNum))
      })
      .catch((err) => {
      dispatch({type: FETCH_POSTS_ERROR, payload: err})
      })
   }
}

export function receivePosts(response,pageNum) {
    return {
        type: RECEIVE_POSTS,
        payload: {
            pageNum: pageNum,
            totalPages: response.headers["x-wp-totalpages"],
            posts: response.data
        }
    };
}
