import React from "react";
import Nav from "./navigation/NavBar";
import RouterConfig from "./navigation/RouterConfig";
import styled from "styled-components";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <MainContainer>
        <RouterConfig />
      </MainContainer>
    </div>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
