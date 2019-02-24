import { chain } from 'lodash';
import {
  REQUEST_POST
} from './actions';

function posts(state = {}, action) {
  switch (action.type) {
    case REQUEST_POST.FINISH: 
      const post = action.payload.post;
      return {
        posts: {
          ...state.posts, 
          [post.id]: {...post}
        }, // need some refactoring...
      }
    case REQUEST_POST.ERROR:
      return {
        posts: {...state.posts}
      }
    case REQUEST_POST.START:
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