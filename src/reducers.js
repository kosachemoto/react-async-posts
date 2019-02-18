import { chain } from 'lodash';
import {
  REQUEST_POSTS
} from './actions';

function posts(state = {}, action) {
  switch (action.type) {
    case REQUEST_POSTS.FINISH: 
      let posts = chain(action.payload.posts)
        .keyBy("id")
        .value()
      return {
        posts: {...state.posts, ...posts}, // need some refactoring...
      }
    case REQUEST_POSTS.ERROR:
      return {
        posts: {...state.posts}
      }
    case REQUEST_POSTS.START:
    default:
      return {
        posts: {...state.posts}
      }
  }
}

// const postsApp = combineReducers({
//   posts
// });

export default posts;