import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import ArrowIcon from '../../../svgs/right-arrow.svg';

const LandingLowerStyles = styled.section`
  width: 100%;
  .landing__lower {
    width: 90%;
    margin: 0 auto;
    padding: 4rem 0;
    max-width: 1100px;
    &--left {
      text-align: center;
      h4 {
        font-size: 1.4rem;
      }
      p {
        margin: 1rem 0;
      }
    }
    &--right {
      text-align: center;
      margin-top: 2rem;
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
    @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 75%;
      &--left {
        text-align: left;
      }
      &--right {
        margin-top: 2.5rem;
      }
    }
  }
`;
const LandingLower = () => (
  <LandingLowerStyles>
    <div className="landing__lower">
      <div className="landing__lower--left">
        <h4>
          Accelerate your digital transformation with Nokia Digital Automation
          Cloud – a high-performance, end-to-end, secure and simple private
          wireless network platform.
        </h4>
        <p>
          Cost-effective, secure and simple to deploy, it’s equipped with
          plug-and-play 5G connectivity to support on-premises data management
          and real-time applications. Making private wireless networking, remote
          operations, IoT, analytics and automation effortless and easily
          accessible.
        </p>
      </div>
      <div className="landing__lower--right">
        <div className="nokia--btn">
          <Link to="/get-started">
            <button className="btn btn--main" type="button">
              <span>Contact us</span>
            </button>
          </Link>
        </div>
        <a
          href="/static/UCTel_Private 5G whitepaper_Feb 21 v4.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <div className="fom">
            <ArrowIcon />
            <span>Download our whitepaper</span>
          </div>
        </a>
      </div>
    </div>
  </LandingLowerStyles>
);

export default LandingLower;
