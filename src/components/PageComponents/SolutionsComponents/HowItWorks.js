import React from 'react';
import styled from 'styled-components';
import MissionIcon from '../../../svgs/mission.svg';
import Step1Icon from '../../../svgs/antenna.svg';
import Step2Icon from '../../../svgs/wifi.svg';
import Step3Icon from '../../../svgs/office-building.svg';

const HowItWorksStyles = styled.section`
  width: 100%;
  background-color: var(--ghostWhite);
  .hiw {
    width: 90%;
    margin: 0 auto;
    padding: 3rem 0;
    max-width: 1100px;
    h3 {
      font-size: 1.85rem;
      margin: 0.5rem 0 1rem 0;
      color: var(--slate);
      text-align: center;
    }
    &--wrapper {
      padding: 1.5rem 0;
      &--box {
        text-align: center;
        width: 80%;
        margin: 0 auto 2rem auto;
        .no {
          color: var(--lightBlue);
          font-size: 3rem;
          text-align: center;
          display: block;
          font-family: Gellix-SemiBold;
        }
        svg {
          margin: 1rem 0;
          fill: var(--slate);
          width: 60px;
        }
        p {
        }
      }
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
  }
  @media only screen and (min-width: 768px) {
    .hiw {
      &--wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
`;
const HowItWorks = () => (
  <HowItWorksStyles>
    <div className="hiw">
      <h3>How it works</h3>
      <div className="hiw--wrapper">
        <div className="hiw--wrapper--box">
          <span className="no">1</span>
          <Step1Icon />
          <p>
            A donor antenna is installed in a location where the best signal can
            be obtained.
          </p>
        </div>
        <div className="hiw--wrapper--box">
          <span className="no">2</span>
          <Step2Icon />
          <p>
            This is connected to an internal amplifier (network unit) to boost
            the signal
          </p>
        </div>
        <div className="hiw--wrapper--box">
          <span className="no">3</span>
          <Step3Icon />
          <p>
            The signal is then distributed throughout the building using
            internal antenna (coverage units), boosting it across the areas
            where it is needed
          </p>
        </div>
      </div>
    </div>
  </HowItWorksStyles>
);

export default HowItWorks;
