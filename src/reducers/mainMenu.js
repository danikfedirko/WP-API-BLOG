import {FETCH_MAIN_MENU, FETCH_MAIN_MENU_ERROR, RECEIVE_MAIN_MENU} from '../actions/mainMenu'

const defaultState = {
  payload:{
    fetching: false,
    fetched: false,
    items: []
  }
}

export default function fetchMainMenu(state=defaultState, action) {
  switch (action.type) {
    case FETCH_MAIN_MENU:
    return{
    ...state,
        payload:{
          fetching: true,
          fetched: false,
          items: []
        }
      }
      case RECEIVE_MAIN_MENU:
      const {items} = action.payload
      return{
      ...state,
          payload:{
            fetching: false,
            fetched: true,
            items: items
          }
        }
        case FETCH_MAIN_MENU_ERROR:
        const {err} = action.payload
        return{
        ...state,
            payload:{
              err:err
            }
          }
    default:
      return state
  }
}
