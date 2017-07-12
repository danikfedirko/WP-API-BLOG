import {RECEIVE_PAGE, FETCH_PAGE} from '../actions/page'

const defaultState = {
  pageContent: [],
  pageTitle:[],
  pageThumb:'',
  fetching: false
}

export default function fetchSinglePost(state=defaultState, action){
  switch (action.type) {
    case FETCH_PAGE:
    return{
        ...state,
        fetching: true
      }
    case RECEIVE_PAGE:
    return{
        ...state,
        pageContent: action.payload.pageContent,
        pageTitle: action.payload.pageTitle,
        pageThumb: action.payload.pageThumb,
        pageDate: action.payload.pageDate,
        fetching: false
      }
    default:
      return state
  }
}
