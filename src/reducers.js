import { chain } from 'lodash';


import {
  REQUEST_POSTS,
  receivePosts
} from './actions';

function posts(state = {}, action) {
  switch (action.type) {
    case REQUEST_POSTS.START:
      return {
        ...state,
      }
    break;
    case REQUEST_POSTS.FINISH: 
      return {
        ...state
      }
    break;
    case REQUEST_POSTS.ERROR:
      return {
        ...state
      }
    break;
    default:
      return state;
  }
}

export default posts;