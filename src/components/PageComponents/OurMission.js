import React from 'react';
import styled from 'styled-components';
import MissionIcon from '../../svgs/mission.svg';

const OurMissionStyles = styled.div`
  width: 100%;
  .mission {
    width: 90%;
    margin: 0 auto;
    padding: 3rem 0;
    color: var(--slate);
    max-width: var(--maxWidth);
    &__left {
      h2 {
        font-size: 2rem;
        font-family: Gellix-SemiBold;
        text-align: center;
      }
    }
    &__right {
      margin-top: 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
      &__box {
        svg {
          width: 45px;
          fill: var(--lightBlue);
        }
        h5 {
          font-size: 1.25rem;
          font-family: Gellix-SemiBold;
          margin-top: 0.5rem;
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
    @media only screen and (min-width: 700px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 2rem;
      padding: 5rem 0;
      &__left {
        h2 {
          font-size: 2.25rem;
        }
      }
      &__right {
        margin-top: 0;
        padding-top: 0;
        grid-gap: 1rem;
      }
    }
    @media only screen and (min-width: 1024px) {
      max-width: 1000px;
      &__left {
        h2 {
          font-size: 2.5rem;
        }
      }
    }
    @media only screen and (min-width: 1280px) {
      &__left {
        padding-top: 2rem;
      }
    }
  }
`;
const OurMission = () => (
  <OurMissionStyles>
    <div className="mission">
      <div className="mission__left">
        <h2>
          Forward-thinking services. Powered by technology, delivered by
          experts.
        </h2>
      </div>
      {/* <div className="mission__right">
        <div className="mission__right__box">
          <MissionIcon />
          <h5>Mission 1</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto unde
            sapiente quo totam dolor? Aliquid.
          </p>
        </div>
        <div className="mission__right__box">
          <MissionIcon />
          <h5>Mission 2</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto unde
            sapiente quo totam dolor? Aliquid.
          </p>
        </div>
        <div className="mission__right__box">
          <MissionIcon />
          <h5>Mission 3</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto unde
            sapiente quo totam dolor? Aliquid.
          </p>
        </div>
        <div className="mission__right__box">
          <MissionIcon />
          <h5>Mission 4</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto unde
            sapiente quo totam dolor? Aliquid.
          </p>
        </div>
      </div> */}
    </div>
  </OurMissionStyles>
);

export default OurMission;
