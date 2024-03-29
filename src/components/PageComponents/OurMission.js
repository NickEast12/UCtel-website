import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import MissionIcon from '../../svgs/antenna.svg';
import FiveGIcon from '../../svgs/fiveg.svg';
import CollaborationIcon from '../../svgs/connection.svg';

const OurMissionStyles = styled.section`
  width: 100%;
  .mission {
    width: 90%;
    margin: 0 auto;
    padding: 3rem 0;
    color: var(--slate);
    max-width: var(--maxWidth);
    &__left {
      h2 {
        font-size: 1.25rem;
        font-family: Gellix-SemiBold;
        text-align: center;
      }
      p {
        margin: 1rem auto 0 auto;
        text-align: center;
        width: 100%;
        @media only screen and (min-width: 1024px) {
          width: 70%;
        }
      }
    }
    &__right {
      margin-top: 2rem;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 1rem;
      justify-self: center;
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
      .span-two {
        grid-column: 1 / 3;
        grid-row: 2 / 2;
      }
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
    @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 2rem;
      padding: 5rem 0;
      &__left {
        h2 {
          font-size: 1.5rem;
        }
      }
      &__right {
        margin-top: 0;
        padding-top: 0;
        grid-gap: 1rem;
        display: block;
        &__box {
          margin-bottom: 1.5rem;
        }
      }
    }
    @media only screen and (min-width: 1024px) {
      max-width: 1000px;
      &__left {
        width: 80%;
        margin: 0 auto;
        h2 {
          font-size: 1.85rem;
        }
        p {
          width: 100%;
        }
      }
    }
    @media only screen and (min-width: 1280px) {
      grid-gap: 4rem;
      &__left {
      }
    }
  }
`;
const OurMission = () => (
  <OurMissionStyles>
    <div className="mission">
      <div className="mission__left">
        <Fade delay={300}>
          <h2>
            UCtel is committed to connecting people, networks, clouds and
            applications with next-generation technology – designed to
            accelerate your digital transformation and improve your connectivity
            and communications.
          </h2>
        </Fade>
      </div>
    </div>
  </OurMissionStyles>
);

export default OurMission;
