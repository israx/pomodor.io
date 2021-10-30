import React from "react";
import styled from "styled-components";

const RewardItem = ({ name, description, cost }) => {
  return (
    <ItemContainer>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>

      <div>
        <h4>cost: {cost}</h4>
        <button>buy</button>
      </div>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  max-width: 700px;
  padding: 1rem;
  background-color: rgb(36, 54, 86);
  color: white;
  border: "1px solid black";
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  gap: 1rem;
  &:hover {
    background-color: rgba(36, 54, 86, 0.9);
  }
`;

export default RewardItem;
