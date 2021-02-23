import React from 'react';
import styled from 'styled-components';
import ArrowIcon from '../../svgs/right-arrow.svg';
import Image from '../functional/Image';

const SuccessStoriesIntroStyles = styled.div`
  width: 100%;
  .success {
    width: 90%;
    margin: 0 auto;
    padding: 3rem 0;
    &__content {
      color: var(--slate);
      .client--name {
        font-size: 1.1rem;
        margin-top: 1rem;
      }
      .client--business {
        color: var(--lightBlue);
        margin-top: 0.25rem;
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
  }
`;

const SuccessStoriesIntro = () => (
  <SuccessStoriesIntroStyles>
    <div className="success">
      <div className="success__content">
        <h6 className="subtitle">Success Story</h6>
        <h3>
          "Quote from one of our clients detailing how we have helped their
          business."
        </h3>
        <h5 className="client--name">Jon Snow</h5>
        <h5 className="client--business">Night's Watch</h5>
        <div className="fom">
          <ArrowIcon />
          <span>Read more</span>
        </div>
      </div>
      <div className="success__img img-decoration">
        <Image filename="template.jpeg" alt="fill this in later" />
      </div>
    </div>
  </SuccessStoriesIntroStyles>
);

export default SuccessStoriesIntro;
