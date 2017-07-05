import {FETCH_CATEGORIES, FETCH_CATEGORIES_ERROR, RECEIVE_CATEGORIES} from '../actions/categories'

var defaultState = {
  categories:[]
}

export default function fetchCategories(state=defaultState, action){
switch (action.type) {
  case FETCH_CATEGORIES:
    return state
  case RECEIVE_CATEGORIES:
      return{
        ...state,
        categories:action.categories
      }
  case FETCH_CATEGORIES_ERROR:
      return{
      ...state,
      err:action.err
    }
  default:
  return state
    }
}
