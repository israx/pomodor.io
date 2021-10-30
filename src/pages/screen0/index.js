import React from "react";
import { usePomodoroStateValue } from "../../state/pomodoros/index";
import { useClockify } from "./hooks/useClockify";
import Controls from "./components/controls/controls";
import BreakControls from "./components/controls/breaks";
import styled from "styled-components";
const Home = () => {
  const [{ timerLabel }] = usePomodoroStateValue();
  const clockifiedValue = useClockify();

  return (
    <MainPomodoroContainer>
      <BreakControls />
      <TimerContainer>
        <h1>{timerLabel}</h1>
        <div className="timer">{clockifiedValue}</div>
      </TimerContainer>

      <Controls />
    </MainPomodoroContainer>
  );
};

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgb(225, 90, 80);
  width: 300px;
  height: 300px;
  border-radius: 50%;
  .timer {
    font-size: 3rem;
    font-weight: bold;
  }
`;

const MainPomodoroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export default Home;
