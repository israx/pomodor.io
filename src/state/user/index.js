import { createContext, useReducer, useContext } from "react";

export const Store = createContext();
const { Provider } = Store;

export const UserStateProvider = ({ reducer, initialUserState, children }) => {
  return (
    <Provider value={useReducer(reducer, initialUserState)}>
      {children}
    </Provider>
  );
};

export const useUserStateValue = () => useContext(Store);
