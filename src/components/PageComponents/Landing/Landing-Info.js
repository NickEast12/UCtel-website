import React from 'react';
import styled from 'styled-components';

const LandingInfoStyles = styled.section`
  width: 100%;
  background-color: var(--ghostWhite);
  .landing__info {
    width: 90%;
    margin: 0 auto;
    padding: 3rem 0;
    &--left {
      padding-bottom: 1rem;
      h3 {
        font-size: 1.2rem;
      }
    }
    &--right {
      ul {
        list-style: none;
        margin-top: 1rem;
        li {
          padding: 0.25rem 0;
          border-left: solid 3px var(--lightBlue);
          padding-left: 5px;
          margin-bottom: 0.85rem;
        }
      }
    }
  }
`;
const LandingInfo = () => (
  <LandingInfoStyles>
    <div className="landing__info">
      <div className="landing__info--left">
        <h3>
          Addressing the need for critical wireless communication, private 5G is
          predicted to grow by £4.2bn in 2024. Essential for Industry 4.0
          implementation, it allows for:
        </h3>
      </div>
      <div className="landing__info--right">
        <ul>
          <li>Unified connectivity </li>
          <li>High multi-user capabilities</li>
          <li>Specific coverage and capacity </li>
          <li>One dedicated network</li>
          <li>High, predictable performance</li>
          <li>Improved security and mobility</li>
          <li>Enhanced bandwidths </li>
          <li>Faster transmission of greater amounts of data</li>
          <li>Coverage precisely where needed (inside and outside)</li>
        </ul>
      </div>
    </div>
  </LandingInfoStyles>
);

export default LandingInfo;
