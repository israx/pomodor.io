import { createContext, useReducer, useContext } from "react";

export const Store = createContext();
const { Provider } = Store;

export const PomodoroStateProvider = ({
  reducer,
  initialPomodoroState,
  children,
}) => {
  return (
    <Provider value={useReducer(reducer, initialPomodoroState)}>
      {children}
    </Provider>
  );
};

export const usePomodoroStateValue = () => useContext(Store);
