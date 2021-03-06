import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

var middleware = applyMiddleware(thunk)

export default function configureStore() {
  return(
   createStore(rootReducer, middleware)
 )
}
