import axios from 'axios';
import { WP_URL } from '../wp-url';

export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST'
export const FETCH_SINGLE_POST_ERROR = 'FETCH_SINGLE_POST_ERROR'
export const RECEIVE_SINGLE_POST = 'RECEIVE_SINGLE_POST'

export function fetchSinglePost(id) {
return function(dispatch) {
    dispatch({type:FETCH_SINGLE_POST})
    axios.get(WP_URL + '/posts/'+id)
      .then((response) => {
        dispatch(receiveSinglePost(response.data))
      })
      .catch((err) => {
        dispatch({type: 'FETCH_POST_ERROR', payload: err})
      })
  }
}

export function receiveSinglePost(postData) {
    return {
        type: RECEIVE_SINGLE_POST,
        payload: {
            postContent:postData.content,
            postTitle: postData.title,
            postThumb:postData._links["wp:featuredmedia"][0].href,
            postDate: postData.date,
            relatedPosts: postData["jetpack-related-posts"]
        }
    };
}
