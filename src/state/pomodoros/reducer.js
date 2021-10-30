import actions from "./actions";

export const initialPomodoroState = {
  budyIndicator: false,
  breakValue: 1,
  longerBreakValue: 15,
  sessionValue: 25,
  timerValueInSeconds: 1500,
  timerLabel: "Pomodoro",
  pomodoros: 0,
};

const pomodoroReducer = (state = initialPomodoroState, action) => {
  switch (action.type) {
    case actions.TOGGLE_IS_BUSSY_INDICATOR:
      return {
        ...state,
        busyIndicator: action.busyIndicator,
      };

    case actions.START_TIMER:
      return {
        ...state,
        timerValueInSeconds: action.timerValueInSeconds,
      };
    case actions.TOGGLE_TIMBER_LABEL:
      return {
        ...state,
        timerLabel: action.timerLabel,
      };
    case actions.ADD_POMODORO:
      return {
        ...state,
        pomodoros: action.pomodoros,
      };
    case actions.RESET_TIMER:
      return initialPomodoroState;

    default:
      return state;
  }
};

export default pomodoroReducer;
