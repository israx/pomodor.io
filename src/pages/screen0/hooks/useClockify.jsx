import { usePomodoroStateValue } from "../../../state/pomodoros/index";

export function useClockify() {
  const [{ timerValueInSeconds }] = usePomodoroStateValue();

  let minutes = Math.floor(timerValueInSeconds / 60);
  let seconds = timerValueInSeconds - minutes * 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return `${minutes}:${seconds}`;
}
