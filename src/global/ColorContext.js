import { createContext, useState } from "react";

export const ColorContext = createContext();
export const ColorContextProvider = (props) => {
  const [selectedColor, setSelectedColor] = useState("#0693E3");
  return (
    <ColorContext.Provider value={{ selectedColor, setSelectedColor }}>
      {props.children}
    </ColorContext.Provider>
  );
};
