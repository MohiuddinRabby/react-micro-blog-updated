import { createContext, useReducer } from "react";
import { MainContentReducer } from "./MainContentReducer";

export const MainContentContext = createContext();
export const MainContentContextProvider = (props) => {
  const [state, dispatch] = useReducer(MainContentReducer);
  return (
    <MainContentContext.Provider value={{ state, dispatch }}>
      {props.children}
    </MainContentContext.Provider>
  );
};
