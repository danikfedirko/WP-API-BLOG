import {RECEIVE_SINGLE_POST, FETCH_SINGLE_POST, FETCH_SINGLE_POST_ERROR} from '../actions/singlePost'

const defaultState = {
  fetching:true,
  postContent: [],
  postTitle:[],
  postThumb:'',
  relatedPosts:[]
}

export default function fetchSinglePost(state=defaultState, action){
  switch (action.type) {
    case FETCH_SINGLE_POST:
     return{
       ...state,
       fetching:true
     }
    case RECEIVE_SINGLE_POST:
    return{
        ...state,
        fetching:false,
        postContent: action.payload.postContent,
        postTitle: action.payload.postTitle,
        postThumb: action.payload.postThumb,
        postDate: action.payload.postDate,
        relatedPosts: action.payload.relatedPosts
      }
    case FETCH_SINGLE_POST_ERROR:
      return{
        ...state,
      fetching:false,
      err:action.payload.err
    }
    default:
      return state
  }
}
