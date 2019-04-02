import {combineReducers} from 'redux'
import settingsReducer from './settings';
import projectsReducer from './projects';
import uiReducer from './ui';
import userReducer from './user';
// import taskReducer from './task';

export default combineReducers({
  settings: settingsReducer,
  projects: projectsReducer,
  ui: uiReducer,
  user: userReducer,
})