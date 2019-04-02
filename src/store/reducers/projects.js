import {
  ADD_PROJECT,
  GET_PROJECT,
  DELETE_PROJECT,
  EDIT_PROJECT,
  UPDATE_PROJECTS
} from "../actions/actionTypes";

const initialState = {};

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PROJECT: {
      const projects = { ...state.projects };
      projects[action.project.id] = action.project;
      return {
        ...state,
        projects
      };
    }
    case GET_PROJECT: {
      return {
        ...state,
        projects: action.projects
      };
    }
    case EDIT_PROJECT: {
      const projects = { ...state.projects };
      projects[action.id] = { ...projects[action.id], ...action.value };
      return {
        ...state,
        projects
      };
    }
    case UPDATE_PROJECTS: {
      const projects = { ...state.projects, ...action.projects };
      return {
        ...state,
        projects
      };
    }
    case DELETE_PROJECT: {
      const projects = { ...state.projects };
      delete projects[action.id];
      return {
        ...state,
        projects
      };
    }
    default:
      return state;
  }
}
