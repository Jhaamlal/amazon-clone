// setup data layer
// track Basket
import { createContext, useContext, useReducer } from "react";

// Data layer creation
export const StateContext = createContext();

// Build provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Use inside the componet
export const useStateValue = () => useContext(StateContext);
