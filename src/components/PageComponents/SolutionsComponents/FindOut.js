import React from 'react';
import styled from 'styled-components';
import MissionIcon from '../../../svgs/mission.svg';

const FindOutStyles = styled.div`
  width: 100%;
  .findCTA {
    background-color: var(--lightBlue);
    padding: 3rem 1.85rem;
    color: var(--white);
    text-align: center;
    svg {
      fill: var(--white);
      width: 55px;
    }
    h4 {
      margin: 1rem 0;
      font-size: 1.5rem;
    }
    p {
      margin-bottom: 1rem;
      color: var(--black);
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
