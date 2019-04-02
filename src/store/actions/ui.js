import { TOGGLE_LEFT_DRAWER, TOGGLE_PROJECTS_DRAWER } from "./actionTypes";

export function toggleLeftDrawer() {
  return (dispatch, getState) => {
    const leftDrawerOpen = getState().ui.leftDrawerOpen;
    dispatch({
      type: TOGGLE_LEFT_DRAWER,
      leftDrawerOpen: !leftDrawerOpen
    });
  };
}

export function toggleProjectsDrawer() {
  return (dispatch, getState) => {
    const projectsDrawer = getState().ui.projectsDrawer;
    dispatch({
      type: TOGGLE_PROJECTS_DRAWER,
      projectsDrawer: !projectsDrawer
    });
  };
}

export function setProjectsDrawer(value) {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_PROJECTS_DRAWER,
      projectsDrawer: value
    });
  };
}
