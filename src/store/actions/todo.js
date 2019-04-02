import {
  ADD_PROJECT,
  GET_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
  UPDATE_PROJECTS
} from "./actionTypes";
import {
  getSortedKeysByObject,
  uniqueId,
  getSortedObjectByKeys
} from "../../lib/utils";
import axios from "../../axios/axiosApp";
import moment from "moment";

export function fetchAddProject(name) {
  return async (dispatch, getState) => {
    try {
      const date = moment(new Date()).format();
      const projects = getState().projects.projects;
      const projectKeys = Object.keys(projects);
      let itemOrder = 0;
      if (projectKeys.length)
        itemOrder =
          Math.max.apply(
            null,
            projectKeys.map(key => projects[key].itemOrder)
          ) + 1;
      const project = {
        id: uniqueId(),
        name,
        date_added: date,
        color: "",
        isFavorite: false,
        isDeleted: 0,
        itemOrder
      };
      dispatch(dispatchAddProject(project));
      await axios.put(`/projects/${project.id}.json`, project);
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchUpdateColor(id, color) {
  return async (dispatch, getState) => {
    try {
      dispatch(dispatchUpdateProject(id, { color }));
      await axios.patch(`/projects/${id}.json`, { color });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchUpdateRename(id, rename) {
  return async (dispatch, getState) => {
    try {
      dispatch(dispatchUpdateProject(id, { name: rename }));
      await axios.patch(`/projects/${id}.json`, { name: rename });
    } catch (error) {
      console.error(error);
    }
  };
}
export function fetchUpdateFavorite(id) {
  return async (dispatch, getState) => {
    try {
      const isFavorite = getState().projects.projects[id].isFavorite;
      dispatch(dispatchUpdateProject(id, { isFavorite: !isFavorite }));
      await axios.patch(`/projects/${id}.json`, { isFavorite: !isFavorite });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchUpdateProjects(projects) {
  return async dispatch => {
    try {
      dispatch(dispatchUpdateProjects(projects));
      await axios.patch(`/projects.json`, { ...projects });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchDeleteProject(id) {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: DELETE_PROJECT, id });
      await axios.delete(`/projects/${id}.json`);
      const getProjects = getState().projects.projects;
      const sortedKeys = getSortedKeysByObject(getProjects, "itemOrder");
      const projects = getSortedObjectByKeys(
        getProjects,
        sortedKeys,
        "itemOrder"
      );
      dispatch(dispatchUpdateProjects(projects));
      await axios.patch(`/projects.json`, { ...projects });
    } catch (error) {
      console.error(error);
    }
  };
}

// export function fetchGetTodo() {
//   return async dispatch => {
//     try {
//       const data = await axios.get(`/todo.json`);
//       dispatch({
//         type: GET_TODO,
//         projects: data.data
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };
// }

function dispatchAddProject(project) {
  return { type: ADD_PROJECT, project };
}

function dispatchUpdateProject(id, value) {
  return { type: EDIT_PROJECT, id, value };
}

function dispatchUpdateProjects(projects) {
  return { type: UPDATE_PROJECTS, projects };
}
