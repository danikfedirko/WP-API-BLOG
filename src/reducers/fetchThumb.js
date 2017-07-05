import {FETCH_POST_THUMB, FETCH_POST_THUMB_ERROR, RECEIVE_POST_THUMB} from '../actions/fetchThumb'

const defaultState = {
  fetching: false,
  fetched: false,
  thumbSrc: ''
};

export default function fetchThumb(state=defaultState, action) {
    switch(action.type) {
        case FETCH_POST_THUMB:
          return{
            ...state,
            thumbSrc: '',
            fetching:true,
            fetched:false
          }
          case RECEIVE_POST_THUMB:
            return{
              ...state,
              thumbSrc: action.thumbSrc,
              fetching:false,
              fetched:true
            }
            case FETCH_POST_THUMB_ERROR:
              return{
                ...state,
                thumbSrc: '',
                fetching:false,
                fetched:false
              }
        default:{
            return state;
          }
    }
}
