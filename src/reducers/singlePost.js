import {RECEIVE_SINGLE_POST_FULLFILLED} from '../actions/singlePost'

const defaultState = {
  postContent: [],
  postTitle:[],
  postThumb:'',
  relatedPosts:[]
}

export default function fetchSinglePost(state=defaultState, action){
  switch (action.type) {
    case RECEIVE_SINGLE_POST_FULLFILLED:
    return{
        ...state,
        postContent: action.payload.postContent,
        postTitle: action.payload.postTitle,
        postThumb: action.payload.postThumb,
        postDate: action.payload.postDate,
        relatedPosts: action.payload.relatedPosts
      }
    default:
      return state
  }
}
