import {FETCH_POST_THUMB, FETCH_POST_THUMB_ERROR, RECEIVE_POST_THUMB} from '../actions/fetchThumb'

const defaultState = {
  fetching: false,
  fetched: false,
  thumbSrcSmall: '',
  thumbSrcNormal:''
};

export default function fetchThumb(state=defaultState, action) {
    switch(action.type) {
        case FETCH_POST_THUMB:
          return{
            ...state,
            fetching:true,
            fetched:false
          }
          case RECEIVE_POST_THUMB:
            return{
              ...state,
              thumbSrcSmall: action.thumbSizes.thumbnail.source_url,
              thumbSrcNormal: action.thumbSizes.large.source_url,
              fetching:false,
              fetched:true
            }
            case FETCH_POST_THUMB_ERROR:
              return{
                ...state,
                fetching:true,
                fetched:false
              }
        default:{
            return state;
          }
    }
}
