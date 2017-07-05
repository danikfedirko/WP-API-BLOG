import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootSaga from '../sagas/rootSaga'

var middleware = applyMiddleware(thunk, logger)

export default function configureStore() {
  return(
   createStore(rootReducer, middleware)
 )
}
