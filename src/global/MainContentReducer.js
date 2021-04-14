import { contentData } from "../contentData";

const initialState = {
  contentData: contentData,
};

export const MainContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CONTENT_DATA": {
      return { ...state, contentData: state.contentData };
    }
    case "ADD_CONTENT": {
      const newContent = [
        {
          id: action.payload.id,
          author: "Golam Mohiuddin",
          body: action.payload.body,
        },
        ...state.contentData,
      ];
      return { ...state, contentData: newContent };
    }
    default: {
      return state;
    }
  }
};
