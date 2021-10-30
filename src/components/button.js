import styled from "styled-components";

export const Button = ({ callback, children }) => {
  return <ButtonContainer onClick={callback}>{children}</ButtonContainer>;
};
const ButtonContainer = styled.button`
  width: 4rem;
  height: 2.5rem;
  padding: 0.4rem;
  color: white;
  background-color: rgb(225, 90, 80);
  font-size: 1.4rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: rgba(225, 90, 80, 0.8);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
