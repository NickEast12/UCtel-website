import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import ArrowIcon from '../../svgs/right-arrow.svg';
import FiveGIcon from '../../svgs/fiveg.svg';
import InBuildingIcon from '../../svgs/smartphone.svg';
import CommunicationsIcon from '../../svgs/unified.svg';

const SolutionsIntroStyles = styled.section`
  width: 100%;
  background-color: var(--ghostWhite);
  .solutions {
    padding: 3rem 0;
    width: 90%;
    margin: 0 auto;
    max-width: 1100px;
    &__content {
      text-align: left;
      color: var(--slate);
      h3 {
        font-size: 1.85rem;
        margin: 0.5rem 0;
      }
      p {
        margin-bottom: 0.5rem;
      }
    }
    &__grid {
      &__box {
        padding: 2rem 0;
        width: 80%;
        margin: 0 auto;
        text-align: center;
        > svg {
          width: 50px;
          fill: var(--slate);
        }
        h4 {
          font-size: 1.3rem;
          margin: 0.5rem 0;
        }
      }
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
    @media only screen and (min-width: 700px) {
      padding: 4rem 0 3rem 0;
      &__content {
        text-align: center;
        p {
          width: 60%;
          margin: 0 auto;
          padding-bottom: 2rem;
        }
      }
      &__grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
        &__box {
          width: 100%;
        }
      }
    }
    @media only screen and (min-width: 1280px) {
      &__grid {
        grid-gap: 2rem;
      }
    }
  }
`;
const SolutionsIntro = () => (
  <SolutionsIntroStyles>
    <div className="solutions">
      <div className="solutions__content">
        <h6 className="subtitle">Solutions</h6>
        <h3>What can UCtel do for you?</h3>
        <p>
          Simply by identifying your need, comparing the products and
          transitioning to the best solution, we allow you and your business to
          adopt digital technology, stay connected and join the future.
        </p>
      </div>
      <div className="solutions__grid">
        <Link to="/solutions/in-building-mobile-connectivity">
          <div className="solutions__grid__box">
            <InBuildingIcon />
            <h4>In-building mobile</h4>
            <p>
              Award-winning, Ofcom-approved indoor mobile signal booster,
              Cel-Fi, offers an exceptional coverage footprint, improving voice
              quality and data speeds with one easy installation
            </p>
            <div className="fom">
              <ArrowIcon />
              <span>Learn more</span>
            </div>
          </div>
        </Link>
        <Link to="/solutions/private-5g">
          <div className="solutions__grid__box">
            <FiveGIcon />
            <h4>Private 5G</h4>
            <p>
              Intrinsically secure, cost-effective, effortlessly mobile and
              reliable, private 5G networks deliver a high-performing, robust
              and scalable solution to support IoT applications
            </p>
            <div className="fom">
              <ArrowIcon />
              <span>Learn more</span>
            </div>
          </div>
        </Link>
        <Link to="/solutions/unified-communications-and-contact-centre">
          <div className="solutions__grid__box">
            <CommunicationsIcon />
            <h4>Unified communications</h4>
            <p>
              Integrated services bring instant messaging, audio, web and video
              conferencing, calling and more to your business, eliminating the
              distance between employees and customers
            </p>
            <div className="fom">
              <ArrowIcon />
              <span>Learn more</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </SolutionsIntroStyles>
);

export default SolutionsIntro;
