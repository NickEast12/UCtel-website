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
    &__left {
      h2 {
        font-size: 1.85rem;
        font-family: Gellix-SemiBold;
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
  }
`;
const OurMission = () => (
  <OurMissionStyles>
    <div className="mission">
      <div className="mission__left">
        <h2>
          Award-winning services. Powered by technology, delivered by experts.
        </h2>
      </div>
      <div className="mission__right">
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
      </div>
    </div>
  </OurMissionStyles>
);

export default OurMission;