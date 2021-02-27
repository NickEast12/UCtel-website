import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import TickIcon from '../../../svgs/tick.svg';

const NokiaDACStyles = styled.section`
  width: 100%;
  background-color: var(--ghostWhite);
  padding: 4rem 0;
  .nokia {
    color: var(--slate);
    width: 90%;
    margin: 0 auto;
    max-width: 1100px;
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
          border-left: solid 3px var(--lightBlue);
          padding-left: 5px;
        }
      }
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
  }
  .fea {
    width: 90%;
    margin: 2rem auto;
    max-width: 1100px;
    &__content {
      border-radius: 4.5px;
      h5 {
        font-size: 1.35rem;
        line-height: 1.85rem;
      }
      ul {
        list-style: none;
        margin: 2rem 0;
        li {
          text-align: left;
          margin-bottom: 1rem;
          font-family: Gellix-Medium;
          display: grid;
          align-items: center;
          grid-template-columns: 30px 1fr;
          border-bottom: solid 1px rgb(0 0 0 / 20%);
          padding-bottom: 10px;

          svg {
            float: left;
            width: 20px;
            margin-right: 10px;
            fill: var(--lightBlue);
          }
        }
        @media only screen and (min-width: 1024px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 2rem;
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .nokia {
      display: grid;
      width: 90%;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 3rem;
      padding: 0 0 4rem 0;
      &--right {
        padding: 0;
        margin: 0;
      }
    }
    .fea {
      width: 90%;
      &__content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 3rem;
        ul {
          padding: 0;
          margin: 0.5rem 0 0 0;
        }
        /* ul {
          display: flex;
          flex-wrap: wrap;
          li {
            flex: 1 0 auto;
          }
          @supports (gap: 0.5rem) {
            gap: 0.5rem;
            li {
              margin: 0;
            }
          }
          @supports not (gap: 0.5rem) {
            li {
              margin: 5px 5px 5px 0;
            }
          }
        } */
      }
    }
  }
`;
const NokiaDAC = () => (
  <NokiaDACStyles>
    <div className="nokia">
      <div className="nokia--left">
        <h6 className="subtitle">Industry-leading technology</h6>
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
        <Fade delay={350}>
          <div className="nokia--right__box">
            <p>
              An industrial-grade private wireless network that’s easy to deploy
            </p>
          </div>
          <div className="nokia--right__box">
            <p>High reliability that’s proven to work with new 5G technology</p>
          </div>
          <div className="nokia--right__box">
            <p>Full control over the management of multi-local networks</p>
          </div>
          <div className="nokia--right__box">
            <p>Strong security &amp; low latency</p>
          </div>
          <div className="nokia--right__box">
            <p>Wide and deep coverage</p>
          </div>
          <div className="nokia--right__box">
            <p>Dependable QoS management </p>
          </div>
        </Fade>
      </div>
    </div>
    <div className="fea">
      <div className="fea__content">
        <div className="fea__content__title">
          <Fade delay={550}>
            <h5>
              Also providing built-in applications and end points, Nokia DAC
              doesn’t just provide private 5G connectivity – it also offers:
            </h5>
          </Fade>
        </div>
        <Fade delay={650}>
          <ul>
            <li>
              <TickIcon />
              Real time location tracking
            </li>
            <li>
              <TickIcon />
              Connected video analytics
            </li>
            <li>
              <TickIcon />
              An end-to-end connect UAV solution
            </li>
            <li>
              <TickIcon />
              Integrated campus communications
            </li>
            <li>
              <TickIcon />
              Native one-to-one communication via VoIP
            </li>
            <li>
              <TickIcon />
              Secure push-to-talk and push-to-video
            </li>
          </ul>
        </Fade>
      </div>
    </div>
  </NokiaDACStyles>
);

export default NokiaDAC;
