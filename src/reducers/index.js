import { combineReducers } from 'redux';
import posts from './posts';
import fetchSinglePost from './singlePost';
import fetchThumb from './fetchThumb'
import title from './title'
import mainMenu from './mainMenu'
import sidebars from './sidebars'
import categories from './categories'
import categoriePosts from './categoriePosts'
import page from './page'

const rootReducer = combineReducers({
    posts,
    fetchSinglePost,
    fetchThumb,
    title,
    mainMenu,
    sidebars,
    categories,
    categoriePosts,
    page
});

export default rootReducer;
