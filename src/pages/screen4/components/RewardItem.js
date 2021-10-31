import React from "react";
import styled from "styled-components";
import { useUserStateValue } from "../../../state/user/index";
import actionTypes from "../../../state/user/actions";

const RewardItem = ({ name, description, cost }) => {
  const [state, dispatch] = useUserStateValue();
  const [{ pomodoros }] = useUserStateValue();

  function buyReward() {
    if (pomodoros <= 0) return;
    dispatch({
      ...state,
      type: actionTypes.ADD_POMODOROS,
      pomodoros: pomodoros - cost,
    });
  }

  return (
    <ItemContainer>
      <div>
        <h3 className="title">{name}</h3>
        <p className="description">{description}</p>
      </div>

      <div className="purchase-section">
        <button className="buy-button" onClick={buyReward}>
          buy
        </button>
        <h3 className="cost"> cost: {cost}</h3>
      </div>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  position: relative;
  max-width: 600px;
  min-width: 450px;
  padding: 1rem;
  background-color: rgb(225, 90, 80);
  color: white;
  border: "1px solid black";
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  gap: 1rem;
  cursor: pointer;

  .title {
    font-size: 1.5rem;
  }
  .description {
    font-weight: 100;
    color: rgba(255, 255, 255, 0.75);
  }
  .buy-button {
    position: absolute;
    bottom: 10px;
    right: 10px;
    padding: 0.2rem;
    width: 3.5rem;
    font-weight: bold;
    font-size: 1.1rem;
    border: 1px solid white;
    border-radius: 8px;
    background-color: transparent;
    color: white;
    transition: all 0.3s ease-in;
    cursor: pointer;
    &:hover {
      color: rgb(225, 90, 80);
      background-color: white;
    }
  }
  &:hover {
    background-color: rgba(225, 90, 80, 0.9);
  }
`;

export default RewardItem;
