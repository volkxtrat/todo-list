const initialState = {
  "93518564": {
    id: null,
    userId: null,
    projectId: null,
    dateCompleted: null,
    dateAdded: null,
    name: null,
    discription: null,
    parentId: null,
    itemOrder: 0,
    isChecked: 0,
    isDeleted: 0,
    isCollapsed: 0
  }
};

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        projects: [...state.projects, action.project]
      };
    }
    default:
      return state;
  }
}
