import React from "react";
import styled from "styled-components";
const About = () => (
  <AboutUsContainer>
    <div>
      <h3>What is Pomodoro?</h3>
      <p>
        The Pomodoro technique is a time management system where work is broken
        into intervals, separated by short breaks. Each interval is known as a
        "pomodoro" which means tomato in italian. It was developed by Francesco
        Cirillo.
      </p>
    </div>
    <div>
      <h3>How to apply Pomodoro?</h3>
      <ol>
        <li>Decide on the task to be done.</li>
        <li>Set the pomodoro timer.</li>
        <li>Work on the task.</li>
        <li>When the timer rings end the work and take a break.</li>
        <li>After four pomodoros take a long break instead of a short one.</li>
      </ol>
    </div>
    <div>
      <h3>About pomodor.io</h3>
      <p>
        Pomodor.io was made by "Team Salsa" for HacktheMidlands with the purpose
        of encouraging people to develop an efficient work/study. Thus, to keep
        people motivated Pomodor.io offers rewards based on the amount of
        pomodoros acumulated by the user.
      </p>
    </div>
    <div>
      <h4>Team Salsa members:</h4>
      <ul>
        <li>
          José Venzke [GitHub: @josevenzke] <p>from Gravatai, Brazil</p>
        </li>
        <li>
          Luis Damy [GitHub: @LewisDamy] <p>from Sao Jose dos Campos, Brazil</p>
        </li>
        <li>
          Israel Arcos [GitHub: @israx]{" "}
          <p>from Ambato, Ecuador based in New York, United States</p>
        </li>
        <li>
          Eugenia Bellver [GitHub: @eniabellver]{" "}
          <p>from Bariloche, Argentina based in London, UK</p>
        </li>
      </ul>
    </div>
  </AboutUsContainer>
);

export default About;

const AboutUsContainer = styled.div`
  width: 500px;
  padding: 2rem;
  color: white;
  line-height: 1.6rem;
  h3 {
    color: rgb(151, 187, 195);
  }
  li {
    font-weight: 100;
  }
`;
