import { usePomodoroStateValue } from "../../../../state/pomodoros/index";
import actionTypes from "../../../../state/pomodoros/actions";

const BreaksControls = () => {
  const [{ longerBreakValue, breakValue }] = usePomodoroStateValue();

  const [state, dispatch] = usePomodoroStateValue();

  const handleShortBreak = () => {
    dispatch({
      ...state,
      type: actionTypes.START_TIMER,
      timerValueInSeconds: breakValue * 60,
    });
    dispatch({
      type: actionTypes.TOGGLE_TIMBER_LABEL,
      timerLabel: "Break",
    });
  };

  const handleLargerBreak = () => {
    dispatch({
      ...state,
      type: actionTypes.START_TIMER,
      timerValueInSeconds: longerBreakValue * 60,
    });

    dispatch({
      type: actionTypes.TOGGLE_TIMBER_LABEL,
      timerLabel: "Break",
    });
  };
  return (
    <div>
      <button onClick={handleShortBreak}>{breakValue}</button>
      <button onClick={handleLargerBreak}>{longerBreakValue}</button>
    </div>
  );
};

export default BreaksControls;
