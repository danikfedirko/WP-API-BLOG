import { combineReducers } from 'redux';
import posts from './posts';
import fetchSinglePost from './singlePost';
import fetchThumb from './fetchThumb'
import title from './title'
import mainMenu from './mainMenu'
import sidebars from './sidebars'

const rootReducer = combineReducers({
    posts,
    fetchSinglePost,
    fetchThumb,
    title,
    mainMenu,
    sidebars
});

export default rootReducer;
