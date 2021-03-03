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
    &--img {
      width: 100%;
      height: 18.5rem;
      object-fit: fill !important;
      .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
        img {
          object-fit: fill !important;
        }
      }
      @media only screen and (min-width: 414px) {
        height: 20rem;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .si__wrapper {
      margin: 0 auto;
      width: 100%;
      display: grid;
      grid-template-columns: 55% 1fr;
      grid-gap: 1rem;
      padding: 4rem 0;
      max-width: 1100px;
    }
    .si--left {
      padding: 0;
    }
    .si--right {
      width: 90%;
      height: 100%;
      margin-top: 1rem;
      padding: 0;
      margin: 0;
      &--img {
        height: 100%;
        .gatsby-image-wrapper {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .si__wrapper {
      padding-top: 5rem;
      grid-gap: 4rem;
      grid-template-columns: 45% 1fr;
      .si--right,
      .si--left {
        width: 100%;
        &--img {
          height: 95%;
        }
      }
    }
  }
`;
const BuildingIntro = () => (
  <SolutionsIntroStyles>
    <div className="si__wrapper">
      <div className="si--left">
        <Fade delay={350}>
          <h6 className="subtitle">In-building Mobile Connectivity</h6>
          <h2>Optimise cellular coverage</h2>
          <p>
            Many buildings to do not allow for the effective propagation of
            mobile signals indoors, which impacts negatively on productivity,
            opportunities and operations – in fact, poor indoor mobile signal is
            detrimental to any business. Historically, the solution was complex,
            expensive or illegal to address, but with a change in Ofcom’s
            licencing since 2018, if you have limited signal at your site, UCtel
            can now deliver a scalable and legal solution in days or weeks,
            resulting in:
          </p>
          <ul>
            <li>
              <span>
                <TickIcon />
              </span>
              Excellent communications
            </li>
            <li>
              <span>
                <TickIcon />
              </span>
              Uninterrupted mobile calling
            </li>
            <li>
              <span>
                <TickIcon />
              </span>
              Better experiences
            </li>
            <li>
              <span>
                <TickIcon />
              </span>
              Zero ‘dead zones’
            </li>
            <li>
              <span>
                <TickIcon />
              </span>
              Reliable 4G
            </li>
          </ul>
        </Fade>
      </div>
      <div className="si--right">
        <div className="si--right--img img-decoration">
          <Image
            filename="cellular-coverage.png"
            alt="Optimise celluar coverage"
          />
        </div>
      </div>
    </div>
  </SolutionsIntroStyles>
);

export default BuildingIntro;
