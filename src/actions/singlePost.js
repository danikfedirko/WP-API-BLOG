import axios from 'axios';
import { WP_URL } from '../wp-url';


export const RECEIVE_SINGLE_POST_FULLFILLED = 'RECEIVE_SINGLE_POST_FULLFILLED'

export function fetchSinglePost(id) {
return function(dispatch) {
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
        type: RECEIVE_SINGLE_POST_FULLFILLED,
        payload: {
            postContent:postData.content,
            postTitle: postData.title,
            postThumb:postData._links["wp:featuredmedia"][0].href,
            postDate: postData.date,
            relatedPosts: postData["jetpack-related-posts"]
        }
    };
}
