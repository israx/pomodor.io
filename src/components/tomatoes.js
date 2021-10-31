import React from "react";
import { useUserStateValue } from "../state/user/index";
import styled from "styled-components";
import Tomatoe from "../assets/tomato";
const Tomatoes = () => {
  const [{ pomodoros }] = useUserStateValue();
  const tomatoeList = [];
  for (let index = 0; index < pomodoros; index++) {
    tomatoeList.push(<Tomatoe />);
  }
  return (
    <MainContainer>
      You have <TomatoesContainer>{tomatoeList}</TomatoesContainer> pomodoros.
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  gap: 1rem;
  color: white;
  font-size: 1.3rem;
  margin-bottom: 2rem;
`;

const TomatoesContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export default Tomatoes;
