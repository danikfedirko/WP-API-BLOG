import {FETCH_CATEGORIE_POSTS_ERROR, RECEIVE_CATEGORIE_POSTS} from '../actions/categoriePosts'

const defaultState = {
    posts: []
};

export default function categoriePosts(state = defaultState, action) {
    switch(action.type) {
        case RECEIVE_CATEGORIE_POSTS:
            const {posts} = action.payload;
            return{
                ...state,
                posts: posts
            }
        case FETCH_CATEGORIE_POSTS_ERROR:
           return{
             ...state,
             err:action.payload
           }
        default:
            return state;
    }

}
