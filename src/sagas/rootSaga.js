import {put, call, fork, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import * as posts from '../actions/posts'
import * as thumb from '../actions/fetchThumb'
import * as mainMenu from '../actions/mainMenu'
import * as title from '../actions/title'
import * as singlePost from '../actions/singlePost'
import { WP_URL, WP_URL_UNI } from '../wp-url';

//Posts
 export function fetchPostsApi(pageNum, POSTS_PER_PAGE) {
     console.log('POSTS ARE FETCHED' + pageNum + POSTS_PER_PAGE)
    return axios.get(WP_URL + '/posts?filter[paged]=' + pageNum + '&filter[posts_per_page]=' + POSTS_PER_PAGE)
      .then((response) => {
        put(posts.receivePosts(pageNum, response))
      })
      .catch((err) => {
      put({type: posts.FETCH_POSTS_ERROR, payload: err})
      })
}

export function* fetchPosts(pageNum, POSTS_PER_PAGE) {
  yield call(fetchPostsApi, pageNum, POSTS_PER_PAGE)
}

//Thumb
export function fetchThumbApi(featuredmedia) {
  axios.get(featuredmedia)
    .then((response) => {
      put(thumb.receiveThumb(response))
    })
    .catch((err) => {
      put({type: thumb.FETCH_POST_THUMB_ERROR, thumbSrc: err})
    })
}

export function* fetchThumb(featuredmedia){
  yield call(fetchThumbApi, featuredmedia)
}

//Title
export function fetchTitleApi() {
  axios.get(WP_URL_UNI)
  .then(response => {
    put(title.receiveWebsiteTitle(response.data.name))
  })
  .catch((err) => {
    put({type:title.FETCH_TITLE_ERROR,payload:err});
  })
}

export function* fetchTitle(){
  yield call(fetchMainMenuApi)
}

//Menu
export function fetchMainMenuApi() {
  axios.get(WP_URL_UNI + '/wp-api-menus/v2/menus')
  .then(response => {
    const menu_id = response.data[0].term_id
    axios.get(WP_URL_UNI + '/wp-api-menus/v2/menus/' + menu_id)
    .then(response => {
      put(mainMenu.receiveMainMenu(response.data))
    })
  })
  .catch((err) => {
    put({type: mainMenu.FETCH_MAIN_MENU_ERROR, payload: err});
  })
}

export function* fetchMainMenu(){
  yield call(fetchMainMenuApi)
}

 function* rootSaga() {
  yield takeEvery('FETCH_POSTS', fetchPosts)
  yield takeEvery('FETCH_POST_THUMB', fetchThumb)
  yield takeEvery('FETCH_MAIN_MENU', fetchMainMenu)
  yield takeEvery('FETCH_TITLE', fetchTitle)
}

export default rootSaga
