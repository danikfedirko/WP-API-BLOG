import {RECEIVE_POSTS, FETCH_POSTS, FETCH_POSTS_ERROR} from '../actions/posts'

const defaultState = {
  fetching: false,
  posts: [],
  pageNum: 1,
  totalPages: 1
};

export default function posts(state = defaultState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        fetching: true
      }
    case RECEIVE_POSTS:
      const {posts} = action.payload;
      return {
        ...state,
        posts: posts,
        fetching: false
      }
    case FETCH_POSTS_ERROR:
      const {err} = action.payload;
      return {
        ...state,
        err: err,
        fetching: false
      }
    default:
      return state;
  }

}
