import { contentData } from "../contentData";

const initialState = {
  contentData: contentData,
};

export const MainContentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_CONTENT_DATA": {
      return { ...state, contentData: contentData };
    }
    case "ADD_CONTENT": {
      const newContent = [
        {
          id: payload.id,
          author: "Golam Mohiuddin",
          body: payload.body,
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
