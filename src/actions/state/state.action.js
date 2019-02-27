export const RESET_STATE = {
  POSTS: "RESET_STATE_POSTS"
}

export function resetState(state) {
  return {
    type: RESET_STATE[state]
  }
}