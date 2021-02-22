import React from 'react';
import styled from 'styled-components';

const FindOutStyles = styled.div`
  width: 100%;
  margin: 4rem 0 0 0;
  .findCTA {
    background-color: var(--lightBlue);
    padding: 2rem 1.85rem;
    color: var(--white);
    text-align: center;

    h5 {
      margin: 1rem 0;
      font-size: 1.15rem;
      line-height: 1.85rem;
    }
    p {
      margin-bottom: 1rem;
      color: var(--black);
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
