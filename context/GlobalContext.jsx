import React, { createContext, useReducer } from "react";
export const GlobalContext = createContext();

const initialState = {
  address: null,
  connected: false,
  balanceETH: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_BALANCE":
      if (action.payload !== null) {
        localStorage.setItem("balanceETH", action.payload);
      }
      return {
        ...state,
        balanceETH: localStorage.getItem("balanceETH") ?? "",
      };
    case "SET_CONNECTED":
      if (action.payload !== null) {
        localStorage.setItem("connected", action.payload);
      }
      return {
        ...state,
        connected: localStorage.getItem("connected"),
      };
    default:
      return state;
  }
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;