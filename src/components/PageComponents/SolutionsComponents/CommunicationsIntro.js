import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import TickIcon from '../../../svgs/tick.svg';
import Image from '../../functional/Image';

const SolutionsIntroStyles = styled.section`
  width: 100%;
  .si--left {
    width: 90%;
    margin: 0 auto;
    padding: 3rem 0 2rem 0;
    h2 {
      font-size: 1.85rem;
      margin: 0.5rem 0 1rem 0;
      color: var(--slate);
    }
    p {
      margin-bottom: 0.5rem;
    }
    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      grid-template-columns: 1fr 1fr;
      grid-gap: 0.5rem;
      margin: 1rem 0;
      li {
        padding: 0.15rem 0;
        position: relative;
        align-items: center;
        font-family: Gellix-Medium;
        span {
          margin-right: 10px;
          svg {
            width: 20px;
            fill: var(--lightBlue);
          }
        }
      }
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
  }
  .si--right {
    width: 80%;
    margin: 0 auto;
    padding-bottom: 2rem;
    &--img {
      .gatsby-image-wrapper {
        img {
          object-fit: fill !important;
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .si__wrapper {
      margin: 0 auto;
      width: 100%;
      display: grid;
      grid-template-columns: 45% 1fr;
      grid-gap: 1rem;
      padding: 4rem 0;
      max-width: 1100px;
    }
    .si--left {
      padding: 0;
    }
    .si--right {
      width: 85%;
      height: 100%;
      margin-top: 1rem;
      padding: 0;
      margin: 0;
      .gatsby-image-wrapper {
        width: 100%;
        height: 30rem;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .si__wrapper {
      grid-gap: 3rem;
      .si--right {
        padding: 1rem;
        width: 100%;
      }
      .si--left {
        width: 100%;
      }
    }
  }
`;
const BuildingIntro = () => (
  <SolutionsIntroStyles>
    <div className="si__wrapper">
      <div className="si--left">
        <Fade delay={350}>
          <h6 className="subtitle">Unified communications</h6>
          <h2>Collaborate securely from anywhere</h2>
          <p>
            Enabling an integration of collaboration tools into one platform –
            such as IP telephone for voice calling, desktop sharing, instant
            messaging and video conferencing – unified communications are
            designed to create a seamless user experience that helps businesses
            and customers work together more effectively.
          </p>
          <p>
            Partnering with leading vendors such as Cisco and RingCentral, we’re
            able to select the best platform for your business – whether that’s
            on-premise, as a service (UCaaS) or hybrid – and help you
            collaborate from anywhere, streamlining existing processes and:
          </p>
          <ul>
            <li>
              <span>
                <TickIcon />
              </span>
              Increasing business efficiencies
            </li>
            <li>
              <span>
                <TickIcon />
              </span>
              Positively impacting work productivity
            </li>
            <li>
              <span>
                <TickIcon />
              </span>
              Elevating customer experience
            </li>
            <li>
              <span>
                <TickIcon />
              </span>
              Reducing gaps in communication
            </li>
            <li>
              <span>
                <TickIcon />
              </span>
              Optimising processes
            </li>
          </ul>
        </Fade>
      </div>
      <div className="si--right">
        <div className="si--right--img img-decoration">
          <Image filename="collaborate.jpeg" alt="Unified communications" />
        </div>
      </div>
    </div>
  </SolutionsIntroStyles>
);

export default BuildingIntro;
