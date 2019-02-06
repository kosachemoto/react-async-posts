import { chain } from 'lodash';
import { combineReducers } from 'redux';

import {
  REQUEST_POSTS
} from './actions';

function posts(state = {}, action) {
  switch (action.type) {
    case REQUEST_POSTS.START:
      return {
        ...state,
      }
    case REQUEST_POSTS.FINISH: 
      let posts = chain(action.payload.posts)
        .keyBy("id")
        .value()

      return {
        ...state,
        posts
      }
    case REQUEST_POSTS.ERROR:
      return {
        ...state
      }
    default:
      return state;
  }
}

const postsApp = combineReducers({
  posts
});

export default postsApp;