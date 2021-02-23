import React from 'react';
import styled from 'styled-components';
import MissionIcon from '../../../svgs/mission.svg';

const NokiaDACStyles = styled.div`
  width: 100%;
  background-color: var(--ghostWhite);
  padding: 4rem 0;
  .nokia {
    color: var(--slate);
    width: 90%;
    margin: 0 auto;
    &--left {
      h3 {
        margin: 0.5rem 0 1rem 0;
        font-size: 1.85rem;
      }
    }
    &--right {
      padding: 2rem 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1.25rem;
      &__box {
        svg {
          width: 45px;
          fill: var(--lightBlue);
        }

        p {
          font-size: 0.95rem;
          margin-top: 0.5rem;
          font-family: Gellix-SemiBold;
        }
      }
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
  }
  .fea {
    width: 90%;
    margin: 0 auto;
    &__content {
      background-color: var(--lightBlue);
      border-radius: 4.5px;
      padding: 1.25rem 1rem;
      h5 {
        color: var(--white);
        font-size: 1.35rem;
        line-height: 1.85rem;
      }
      ul {
        list-style: none;
        margin: 1rem 0;
        li {
          background-color: var(--white);
          border-radius: 4.5px;
          padding: 0.85rem;
          color: var(--slate);
          margin-block: 0.85rem;
          text-align: center;
          font-family: Gellix-Medium;
        }
      }
    }
  }
`;
const NokiaDAC = () => (
  <NokiaDACStyles>
    <div className="nokia">
      <div className="nokia--left">
        <h6 className="subtitle">Section header</h6>
        <h3>Nokia DAC</h3>
        <p>
          Partnering with Nokia, UCtel brings high-performance, end-to-end
          private wireless networking and edge computing platform to your
          business via Nokia’s Digital Automation Cloud (DAC). Offered as a
          service, Nokia DAC combines plug-and-play 4G and 5G connectivity with
          on-premise data management and processing, supporting real-time
          applications for smart manufacturing, predictive maintenance and
          remote operations. Easily accessible for locations of all sizes,
          including ports, mines, factories, hospitals and airports.
        </p>
      </div>
      <div className="nokia--right">
        <div className="nokia--right__box">
          <MissionIcon />
          <p>
            An industrial-grade private wireless network that’s easy to deploy
          </p>
        </div>
        <div className="nokia--right__box">
          <MissionIcon />
          <p>High reliability that’s proven to work with new 5G technology</p>
        </div>
        <div className="nokia--right__box">
          <MissionIcon />
          <p>Full control over the management of multi-local networks</p>
        </div>
        <div className="nokia--right__box">
          <MissionIcon />
          <p>Strong security &amp; low latency</p>
        </div>
        <div className="nokia--right__box">
          <MissionIcon />
          <p>Wide and deep coverage</p>
        </div>
        <div className="nokia--right__box">
          <MissionIcon />
          <p>Dependable QoS management </p>
        </div>
      </div>
    </div>
    <div className="fea">
      <div className="fea__content">
        <div className="fea__content__title">
          <h5>
            Also providing built-in applications and end points, Nokia DAC
            doesn’t just provide private 5G connectivity – it also offers:
          </h5>
        </div>
        <ul>
          <li>Real time location tracking</li>
          <li>Connected video analytics</li>
          <li>An end-to-end connect UAV solution</li>
          <li>Integrated campus communications</li>
          <li>Native one-to-one communication via VoIP</li>
          <li>Secure push-to-talk and push-to-video</li>
        </ul>
      </div>
    </div>
  </NokiaDACStyles>
);

export default NokiaDAC;
