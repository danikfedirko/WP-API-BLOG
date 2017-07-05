import { combineReducers } from 'redux';
import posts from './posts';
import fetchSinglePost from './singlePost';
import fetchThumb from './fetchThumb'
import title from './title'
import mainMenu from './mainMenu'
import sidebars from './sidebars'
import categories from './categories'
import categoriePosts from './categoriePosts'

const rootReducer = combineReducers({
    posts,
    fetchSinglePost,
    fetchThumb,
    title,
    mainMenu,
    sidebars,
    categories,
    categoriePosts
});

export default rootReducer;
