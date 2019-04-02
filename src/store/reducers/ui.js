import { TOGGLE_LEFT_DRAWER, TOGGLE_PROJECTS_DRAWER } from "../actions/actionTypes";

const initialState = {
  leftDrawerOpen: false,
  projectsDrawer: false,
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LEFT_DRAWER: {
      return {
        ...state,
        leftDrawerOpen: action.leftDrawerOpen
      };
    }
    case TOGGLE_PROJECTS_DRAWER: {
      return {
        ...state,
        projectsDrawer: action.projectsDrawer
      };
    }
    default:
      return state;
  }
}
