import React from 'react';
import styled from 'styled-components';
import MissionIcon from '../../svgs/mission.svg';

const WhereWeWorkStyles = styled.div`
  width: 100%;
  .work {
    width: 90%;
    margin: 0 auto;
    padding: 0 0 3rem 0;
    color: var(--slate);
    max-width: 1000px;
    &__content {
      h3 {
        font-size: 1.65rem;
      }
    }
    &__areas {
      margin-top: 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
      &__box {
        padding: 0.5rem 0;
        width: 90%;
        margin: 0 auto;
        text-align: left;
        > svg {
          width: 45px;
          fill: var(--lightBlue);
        }
        h5 {
          font-size: 1.25rem;
          margin: 0.5rem 0;
        }
        p {
          font-size: 0.85rem;
          margin-top: 0.5rem;
        }
      }
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
  }
  @media only screen and (min-width: 768px) {
    .work {
      padding: 3rem 0 5rem 0;
      &__areas {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;
const WhereWeWork = () => (
  <WhereWeWorkStyles>
    <div className="work">
      <div className="work__content">
        <h6 className="subtitle">Where we work</h6>
        <h3>
          We pride ourselves on offering cutting-edge technology that enables
          faster communication, better collaborations and improved operations.
        </h3>
      </div>
      <div className="work__areas">
        <div className="work__areas__box">
          <MissionIcon />
          <h5>Healthcare</h5>
          <p>Some text on how we work within this sector</p>
        </div>
        <div className="work__areas__box">
          <MissionIcon />
          <h5>Agriculture</h5>
          <p>Some text on how we work within this sector</p>
        </div>
        <div className="work__areas__box">
          <MissionIcon />
          <h5>Construction</h5>
          <p>Some text on how we work within this sector</p>
        </div>
        <div className="work__areas__box">
          <MissionIcon />
          <h5>Warehousing</h5>
          <p>Some text on how we work within this sector</p>
        </div>
      </div>
    </div>
  </WhereWeWorkStyles>
);

export default WhereWeWork;
