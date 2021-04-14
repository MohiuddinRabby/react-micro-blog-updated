import { contentData } from "../contentData";

const initialState = {
  contentData: contentData,
};

export const MainContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CONTENT_DATA": {
      return { ...state, contentData: state.contentData };
    }
    // case "ADD_CONTENT": {
    //   const newTask = [
    //     { id: action.payload.id, taskName: action.payload.taskName },
    //     ...state.taskList,
    //   ];
    //   return { ...state, taskList: newTask };
    // }
    default: {
      return state;
    }
  }
};
