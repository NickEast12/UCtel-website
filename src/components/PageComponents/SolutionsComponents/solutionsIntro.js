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
    }
    ul {
      list-style: none;
      /* display: flex;
      flex-wrap: wrap;
      grid-template-columns: 1fr 1fr;
      grid-gap: 0.5rem; */
      margin: 1rem 0;
      li {
        padding: 0.15rem 0;
        position: relative;
        display: flex;
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
    padding-bottom: 4rem;
    &__img {
    }
  }
  @media only screen and (min-width: 768px) {
    .si__wrapper {
      margin: 0 auto;
      width: 90%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
      padding: 4rem 0;
      max-width: 1100px;
      .si--left {
        width: 100%;
        padding: 0;
      }
      .si--right {
        height: 100%;
        width: 100%;
        &--img {
          height: 100%;
          width: 100%;
        }
        .gatsby-image-wrapper {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
`;
const SolutionsIntro = () => (
  <SolutionsIntroStyles>
    <div className="si__wrapper">
      <div className="si--left">
        <Fade delay={350}>
          <h6 className="subtitle">Private 5G</h6>
          <h2>The future of wireless is here</h2>
          <p>
            Powering Industry 4.0, next-generation 5G technology is
            architectured to create a dedicated, private network with unified
            connectivity, offering full control of critical business
            applications and communications, via:
          </p>
          <ul>
            <li>
              <span>
                <TickIcon />
              </span>
              High performing indoors and outdoors connectivity across large
              sites
            </li>
            <li>
              <span>
                <TickIcon />
              </span>
              Consistent high data rates{' '}
            </li>
            <li>
              <span>
                <TickIcon />
              </span>
              High multi-user capacity
            </li>
            <li>
              <span>
                <TickIcon />
              </span>
              High-capacity and ultra-reliable low latency
            </li>
            <li>
              <span>
                <TickIcon />
              </span>
              Intrinsic security{' '}
            </li>
            <li>
              <span>
                <TickIcon />
              </span>
              Outstanding mobility{' '}
            </li>
            <li>
              <span>
                <TickIcon />
              </span>
              Mission-critical reliability{' '}
            </li>
            <li>
              <span>
                <TickIcon />
              </span>
              Robust and cost-effective connectivity{' '}
            </li>
          </ul>
        </Fade>
      </div>
      <div className="si--right">
        <div className="si--right--img img-decoration">
          <Image filename="wireless.jpeg" alt="Private 5G" />
        </div>
      </div>
    </div>
  </SolutionsIntroStyles>
);

export default SolutionsIntro;
