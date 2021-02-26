import React from 'react';
import styled from 'styled-components';
import MissionIcon from '../../../svgs/mission.svg';

const FindOutStyles = styled.div`
  width: 100%;
  background-color: var(--lightBlue);
  .findCTA {
    padding: 4rem 1.85rem;
    color: var(--white);
    text-align: center;
    max-width: 1100px;
    svg {
      fill: var(--white);
      width: 55px;
    }
    h4 {
      margin: 1rem 0;
      color: var(--white);
      font-size: 1.5rem;
    }
    p {
      margin-bottom: 1rem;
      color: var(--white);
    }

    @media only screen and (min-width: 375px) {
      width: 85%;
      margin: 0 auto;
    }
    @media only screen and (min-width: 768px) {
      width: 70%;
      margin: 0 auto;
      p {
        width: 70%;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`;
const FindOut = () => (
  <FindOutStyles>
    <div className="findCTA">
      <MissionIcon />
      <h4>And for businesses with no mobile signal on site?</h4>
      <p>
        We have alternative technologies that will bring coverage to your
        building and transform your connectivity.
      </p>
      <button className="btn btn--slate" type="button">
        <span>Find out how</span>
      </button>
    </div>
  </FindOutStyles>
);

export default FindOut;
