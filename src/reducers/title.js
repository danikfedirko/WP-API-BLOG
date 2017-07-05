import {FETCH_TITLE, RECEIVE_TITLE, FETCH_TITLE_ERROR} from '../actions/title'

const defaultState = {
  payload: {
    fetching: false,
    fetched: false,
    websiteTitle: ''
  }
}

export default function fetchTitle(state = defaultState, action) {
  switch (action.type) {
    case FETCH_TITLE:
      return {
        ...state,
        payload: {
          fetching: true,
          fetched: false,
          websiteTitle: ''
        }
      }
      case RECEIVE_TITLE:
        return {
          ...state,
          payload: {
            fetching: false,
            fetched: true,
            websiteTitle: action.payload.websiteTitle
          }
        }
        case FETCH_TITLE_ERROR:
          return {
            ...state,
            payload: {
              fetching: false,
              fetched: false,
              error:action.payload.err
            }
          }
    default:
      return state
  }
}
