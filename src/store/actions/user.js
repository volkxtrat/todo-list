import { SET_USER, CLEAR_USER, RESET_USER } from "./actionTypes";

export function setUser(user) {
  return dispatch => {
    dispatch({ type: SET_USER, payload: { currentUser: user } });
  };
}
export function clearUser() {
  return dispatch => {
    dispatch({ type: CLEAR_USER });
  };
}
export function resetUser() {
  return dispatch => {
    dispatch({ type: RESET_USER });
  };
}
