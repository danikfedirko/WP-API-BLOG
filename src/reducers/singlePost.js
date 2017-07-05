import {RECEIVE_SINGLE_POST_FULLFILLED} from '../actions/singlePost'

const defaultState = {
  postContent: [],
  postTitle:[],
  postThumb:''
}

export default function fetchSinglePost(state=defaultState, action){
  switch (action.type) {
    case RECEIVE_SINGLE_POST_FULLFILLED:
    return{
        ...state,
        postContent: action.payload.postContent,
        postTitle: action.payload.postTitle,
        postThumb: action.payload.postThumb,
        postDate: action.payload.postDate
      }
    default:
      return state
  }
}
