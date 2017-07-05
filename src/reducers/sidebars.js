import {FETCH_SIDEBARS, FETCH_SIDEBARS_ERROR, RECEIVE_SIDEBARS} from '../actions/sidebars'

export const defaultState = {
    fetching: false,
    fetched: false,
    sidebars: []
}

export default function fetchSidebars(state=defaultState, action) {
  switch (action.type) {
    case FETCH_SIDEBARS:
        return{
          ...state,
          fetching: true,
          fetched: false
        }
    case RECEIVE_SIDEBARS:
      return{
        ...state,
        fetching: false,
        fetched: true,
        sidebars: action.sidebars
      }
    case FETCH_SIDEBARS_ERROR:
      return{
        ...state,
        err:action.err
      }
    default:
    return state
  }
}
