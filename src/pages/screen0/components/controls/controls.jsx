import { useEffect, useRef } from "react";
import { useClockify } from "../../hooks/useClockify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedo } from "@fortawesome/free-solid-svg-icons";
import { usePomodoroStateValue } from "../../../../state/pomodoros/index";
import actionTypes from "../../../../state/pomodoros/actions";

const Controls = () => {
  const [
    {
      timerValueInSeconds,
      pomodoros,
      breakValue,
      sessionValue,
      timerLabel,
      busyIndicator,
    },
  ] = usePomodoroStateValue();
  const [state, dispatch] = usePomodoroStateValue();
  // Custom Hook
  const clockifiedValue = useClockify();
  const bellSoundUrl =
    "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3";
  const audioSoundRef = useRef();

  const handleReset = () => {
    dispatch({
      ...state,
      type: actionTypes.RESET_TIMER,
    });
    audioSoundRef.current.pause();
    audioSoundRef.current.time = 0;
  };

  const handlePlayPause = () => {
    dispatch({
      ...state,
      type: actionTypes.TOGGLE_IS_BUSSY_INDICATOR,
      busyIndicator: !state.busyIndicator,
    });
  };

  const handleCount = () => {
    dispatch({
      ...state,
      type: actionTypes.START_TIMER,
      timerValueInSeconds: timerValueInSeconds - 1,
    });

    if (timerValueInSeconds === 0) {
      audioSoundRef.current.play();
      if (timerLabel === "Session") {
        // TODO: call end point to add pomodoros to db

        // dispatching pomodoros
        dispatch({
          ...state,
          type: actionTypes.ADD_POMODORO,
          pomodoros: pomodoros + 1,
        });
        dispatch({
          ...state,
          type: actionTypes.TOGGLE_TIMBER_LABEL,
          timerLabel: "Break",
        });
        dispatch({
          ...state,
          type: actionTypes.START_TIMER,
          timerValueInSeconds: breakValue * 60,
        });
      } else if (timerLabel === "Break") {
        dispatch({
          ...state,
          type: actionTypes.TOGGLE_TIMBER_LABEL,
          timerLabel: "Session",
        });
        dispatch({
          ...state,
          type: actionTypes.START_TIMER,
          timerValueInSeconds: sessionValue * 60,
        });
      }
    }
  };

  useEffect(() => {
    if (busyIndicator) {
      let timerInterval = setInterval(() => {
        handleCount();

        document.title = `[${timerLabel}] - ${clockifiedValue}`;
      }, 1000);
      // Clear interval if the component is unmounted
      return () => clearInterval(timerInterval);
    }
  });

  return (
    <div className="controls__wrp">
      <button type="button" id="start_stop" onClick={handlePlayPause}>
        <FontAwesomeIcon icon={!busyIndicator ? faPlay : faPause} />
      </button>
      <button type="button" id="reset" onClick={handleReset}>
        <FontAwesomeIcon icon={faRedo} />
      </button>
      <audio id="beep" src={bellSoundUrl} ref={audioSoundRef} preload="auto" />
    </div>
  );
};

export default Controls;
