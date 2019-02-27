import { REQUEST_USER } from './../../actions';

export const users = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_USER.FINISH:
      const user = action.payload.user;
      return {
        ...state,
        [user.id]: {...user}
      }
    case REQUEST_USER.ERROR: 
      return {
        ...state
      }
    case REQUEST_USER.START:
    default:
      return {
        ...state
      }
  }
}