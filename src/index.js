import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import pomodoroReducer, {
  initialPomodoroState,
} from "./state/pomodoros/reducer";

import { PomodoroStateProvider } from "./state/pomodoros/index";
ReactDOM.render(
  <React.StrictMode>
    <PomodoroStateProvider
      reducer={pomodoroReducer}
      initialPomodoroState={initialPomodoroState}
    >
      <Router>
        <App />
      </Router>
    </PomodoroStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
