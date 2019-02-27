import { 
  REQUEST_POST, 
  RESET_STATE 
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

function root(state, action) {
  switch (action.type) {
    case RESET_STATE.POSTS:
      state  = undefined;
    break;
  }
  return posts(state, action)
}

// const postsApp = combineReducers({
//   posts
// });

export default root;