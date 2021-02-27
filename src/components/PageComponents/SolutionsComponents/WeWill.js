import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const WeWillStyles = styled.section`
  width: 100%;
  .ww__wrapper {
    max-width: 1100px;
    width: 90%;
    margin: 0 auto;
    padding-bottom: 3rem;
    &--left {
      h3 {
        margin-bottom: 1rem;
      }
    }
    &--right {
      ul {
        list-style: none;
        margin: 1.5rem 0;
        li {
          margin-bottom: 1.5rem;
          border-left: var(--lightBlue) 3px solid;
          padding-left: 0.5rem;
        }
        @media only screen and (min-width: 768px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 1rem;
        }
      }
    }
    @media only screen and (min-width: 1280px) {
      display: grid;
      grid-template-columns: 30% 1fr;
      padding: 3.5rem 0;
      &--right {
        ul {
          margin-top: 1rem;
        }
      }
    }
  }
`;
const WeWill = () => (
  <WeWillStyles>
    <div className="ww__wrapper">
      <div className="ww__wrapper--left">
        <h3>At UCtel we will:</h3>
      </div>
      <div className="ww__wrapper--right">
        <Fade delay={350}>
          <ul>
            <li>
              Advise on the best system for your environment using floor plans
              or an onsite survey
            </li>
            <li>
              Provide detailed surveys to establish the exact solution required
              and placement of devices in the building
            </li>
            <li>
              Install and test to ensure the system is providing the required
              coverage
            </li>
            <li>
              Provide ongoing management and support via the cloud and UCtel’s
              helpdesk
            </li>
            <li>
              Carry out regular service reviews to ensure the system continues
              to deliver against the business requirements
            </li>
          </ul>
        </Fade>
      </div>
    </div>
  </WeWillStyles>
);

export default WeWill;
