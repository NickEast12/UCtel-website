import { Link } from 'gatsby';
import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import ArrowIcon from '../../svgs/right-arrow.svg';
import Image from '../functional/Image';

const SuccessStoriesIntroStyles = styled.section`
  width: 100%;
  .success {
    width: 90%;
    margin: 0 auto;
    padding: 3rem 0;
    max-width: 1100px;
    &__content {
      color: var(--slate);
      .client--name {
        font-size: 1.1rem;
        margin-top: 1rem;
      }
      .client--business {
        color: var(--lightBlue);
        margin-top: 1rem;
        font-size: 1.1rem;
      }
    }
    &__img {
      width: 95%;
      margin-top: 2rem;
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
    @media only screen and (min-width: 700px) {
      display: grid;
      padding: 5rem 0;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
      grid-template-areas: 'a b';
      &__content {
        grid-area: a;
      }
      &__img {
        margin-top: 0;
        grid-area: b;
        .gatsby-image-wrapper {
          height: 100%;
        }
      }
    }
    @media only screen and (min-width: 1024px) {
      &__content {
        padding-top: 3rem;
      }
    }
  }
`;

const SuccessStoriesIntro = () => (
  <SuccessStoriesIntroStyles>
    <div className="success">
      <div className="success__content">
        <Fade delay={300}>
          <h6 className="subtitle">Success Story</h6>
          <h3>
            "Smooth conversion to a seamless communication was of vital
            significance to us. UCtel understood our business and their delivery
            was flawless"
          </h3>
          {/* <h5 className="client--name">Jon Snow</h5> */}
          <h5 className="client--business">
            Central London Community Healthcare NHS Trust
          </h5>
          <Link to="/case-studies">
            <div className="fom">
              <ArrowIcon />
              <span>Read more</span>
            </div>
          </Link>
        </Fade>
      </div>
      <div className="success__img img-decoration">
        <Image filename="template.jpeg" alt="fill this in later" />
      </div>
    </div>
  </SuccessStoriesIntroStyles>
);

export default SuccessStoriesIntro;
