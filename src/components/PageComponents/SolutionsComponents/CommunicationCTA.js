import React from 'react';
import styled from 'styled-components';

const FindOutStyles = styled.div`
  width: 100%;
  margin: 4rem 0 0 0;
  background-color: var(--lightBlue);
  .findCTA {
    padding: 2rem 1.85rem;
    text-align: center;
    margin: 0 auto;
    max-width: 1100px;
    h5 {
      color: var(--white);
      margin: 1rem 0;
      font-size: 1.15rem;
      line-height: 1.85rem;
    }
    p {
      margin-bottom: 1rem;
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
    @media only screen and (min-width: 768px) {
      padding: 3.5rem 0;
      h5 {
        font-size: 1.5rem;
        line-height: 1.5;
      }
      button {
        max-width: 220px !important;
      }
    }
  }
`;

const CommunicationCTA = () => (
  <FindOutStyles>
    <div className="findCTA">
      <h5>
        Through reforming communications and utilising one system, unified
        communications allow businesses to make the fastest possible decisions
        and transactions with flexibility and mobility.
      </h5>
      <button className="btn btn--slate" type="button">
        <span>Talk to an expert today</span>
      </button>
    </div>
  </FindOutStyles>
);

export default CommunicationCTA;
