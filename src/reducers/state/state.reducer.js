import { RESET_STATE } from './../../actions';
import { posts } from './../../reducers';

export const root = (state, action) => {
  switch (action.type) {
    case RESET_STATE.POSTS:
      state  = undefined;
    break;
  }
  return posts(state, action)
}