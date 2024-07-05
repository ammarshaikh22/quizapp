// CustomContext.tsx
import React, { createContext, useState, ReactNode } from "react";

// Define your context type
export interface CustomContextType {
  data: {
    fName: string;
    lName: string;
    pass: string;
  };
  setData: React.Dispatch<
    React.SetStateAction<{
      fName: string;
      lName: string;
      pass: string;
    }>
  >;
  correct: number | undefined;
  setCorrect: any;
  skip: number | undefined
  setSkip: any
}

const defaultData: CustomContextType = {
  data: {
    fName: "",
    lName: "",
    pass: "",
  },
  setData: () => { },
  correct: 0,
  setCorrect: () => { },
  skip: 0,
  setSkip: () => { }
};

// Export context and provider
export const Context = createContext<CustomContextType>(defaultData);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState(defaultData.data);
  const [correct, setCorrect] = useState(0);
  const [skip, setSkip] = useState(0)
  return (
    <Context.Provider value={{ data, setData, correct, setCorrect, skip, setSkip }}>
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;
