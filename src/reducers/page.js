import {RECEIVE_PAGE} from '../actions/page'

const defaultState = {
  pageContent: [],
  pageTitle:[],
  pageThumb:''
}

export default function fetchSinglePost(state=defaultState, action){
  switch (action.type) {
    case RECEIVE_PAGE:
    return{
        ...state,
        pageContent: action.payload.pageContent,
        pageTitle: action.payload.pageTitle,
        pageThumb: action.payload.pageThumb,
        pageDate: action.payload.pageDate
      }
    default:
      return state
  }
}
