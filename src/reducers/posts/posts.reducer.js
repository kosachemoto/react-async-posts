import { REQUEST_POST } from './../../actions';

export const posts = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_POST.FINISH: 
      const post = action.payload.post;
      return {
        ...state, 
        [post.id]: {...post} // need some refactoring...
      }
    case REQUEST_POST.ERROR:
      return {
        ...state
      }
    case REQUEST_POST.START:
    default:
      return {
        ...state
      }
  }
}