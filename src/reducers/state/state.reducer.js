import { combineReducers } from 'redux';
import { RESET_STATE } from './../../actions';
// import { posts, users } from './../../reducers';

import { posts } from './../../reducers/posts/posts.reducer';
import { users } from './../../reducers/users/users.reducer';

const appReducer = combineReducers({
  posts,
  users
});

// export const root = combineReducers({
//   posts,
//   users
// });

export const root = (state, action) => {
  switch (action.type) {
    case RESET_STATE.POSTS:
      state  = undefined;
    break;
  }
  return appReducer(state, action)
}