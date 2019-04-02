import { SET_USER, CLEAR_USER, RESET_USER } from "../actions/actionTypes";

const initialState = {
  isLoading: true,
  currentUser: null
};

export default function userReducer(state = initialState, actions) {
  switch (actions.type) {
    case RESET_USER: {
      return {
        ...initialState
      };
    }
    case SET_USER: {
      return {
        ...state,
        isLoading: false,
        currentUser: actions.payload.currentUser
      };
    }
    case CLEAR_USER: {
      return {
        ...initialState,
        isLoading: false
      };
    }

    default: {
      return { ...state };
    }
  }
}
