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
      padding-top: 3rem;
      .client--name {
        font-size: 1.1rem;
        margin-top: 2rem;
      }
      .client--business {
        color: var(--lightBlue);
        margin-top: 0.5rem;
        font-size: 1.1rem;
      }
    }
    &__img {
      width: 95%;
      margin-top: 2rem;
      height: 15rem;
      .gatsby-image-wrapper {
        height: 15rem;
      }
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
        width: 100%;
        height: 100%;
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
      <div className="success__img img-decoration">
        <Image
          filename="successstory.jpg"
          alt="Central London Community Healthcare NHS Trust"
        />
      </div>
      <div className="success__content">
        <Fade delay={300}>
          <h6 className="subtitle">Success Story</h6>
          <h3>
            Seamless transformation for the end-user was paramount to Wolseley.
            UCtel understood our business and their delivery of our 600 sites
            was excellent.
          </h3>
          <h5 className="client--name">Nathan Wright</h5>
          <h5 className="client--business">Wolseley Project Manager</h5>
          <Link to="/case-studies">
            <div className="fom">
              <ArrowIcon />
              <span>Read more</span>
            </div>
          </Link>
        </Fade>
      </div>
    </div>
  </SuccessStoriesIntroStyles>
);

export default SuccessStoriesIntro;
