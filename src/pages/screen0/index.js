import React from "react";
import { usePomodoroStateValue } from "../../state/pomodoros/index";
import { useClockify } from "./hooks/useClockify";
import Controls from "./components/controls/controls";
import BreakControls from "./components/controls/breaks";

const Home = () => {
  const [{ timerLabel }] = usePomodoroStateValue();
  const clockifiedValue = useClockify();

  return (
    <div>
      <BreakControls />
      <h1>{timerLabel}</h1>
      <div>{clockifiedValue}</div>
      <Controls />
    </div>
  );
};

export default Home;
