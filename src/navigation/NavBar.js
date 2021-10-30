import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Paths } from "../Constants";
//logo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faAppleAlt,
  faChartBar,
  faCog,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <StyledNav>
      <Link to={Paths.home}>
        <FontAwesomeIcon icon={faClock} />
      </Link>
      <Link to={Paths.about}>About</Link>

      <Link to={Paths.rewards}>
        <Tab>
          <FontAwesomeIcon icon={faAppleAlt} />
          Rewards
        </Tab>
      </Link>
      <Link to={Paths.settings}>
        <Tab>
          <FontAwesomeIcon icon={faCog} />
          Settings
        </Tab>
      </Link>
    </StyledNav>
  );
};

const Tab = styled.div`
  display: flex;
  gap: 1rem;
`;
const StyledNav = styled.nav`
  --sidePadding: 3rem;
  height: 10vh;
  padding: 0.5rem var(--sidePadding);
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  margin-bottom: 2rem;
  background: var(--white);

  a {
    text-decoration: none;
    transition: all 0.3s ease;
    color: var(--red);
    font-size: 2rem;
  }

  @media screen and (min-width: 720px) {
    --sidePadding: 5rem;
  }
  @media screen and (min-width: 1200px) {
    --sidePadding: 10rem;
    .extra-column {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default Nav;
