import React from 'react';
import styled from 'styled-components';
import Image from '../functional/Image';

const AboutPageIntroStyles = styled.div`
  width: 100%;
  .ap {
    padding: 3rem 0;
    width: 90%;
    margin: 0 auto;
    color: var(--slate);
    &--left {
      h6 {
        margin-bottom: 0.5rem;
      }
      h2 {
        font-size: 1.85rem;
        margin-bottom: 0.85rem;
      }
    }
    &--right {
      width: 100%;
      height: 20rem;
      margin: 2rem auto;
      display: grid;
      grid-row-gap: 9px;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-column-gap: 9px;
      grid-template-areas:
        'grid-a grid-b grid-b'
        'grid-a grid-b grid-b'
        'grid-c grid-c grid-d';
      .ap--right--img {
        width: 100%;
        height: 100%;
        .gatsby-image-wrapper {
          width: 100%;
          height: 100%;
        }
      }
      .grid-a {
        grid-area: grid-a;
      }
      .grid-b {
        grid-area: grid-b;
      }
      .grid-c {
        grid-area: grid-c;
      }
      .grid-d {
        grid-area: grid-d;
      }
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
  }
`;
const AboutPageIntro = () => (
  <AboutPageIntroStyles>
    <div className="ap">
      <div className="ap--left">
        <h6 className="subtitle">Our Story</h6>
        <h2>Caption that introduces our story!</h2>
        <p>
          UCtel has been providing unrivalled unified communications solutions
          to thousands of businesses across the UK since 2010. Delivering
          on-premise, cloud and hybrid solutions, we are passionate about
          keeping businesses connected and ahead of the competition.
        </p>
      </div>
      <div className="ap--right">
        <div className="ap--right--img grid-a">
          <Image filename="template.jpeg" alt="Change this later" />
        </div>
        <div className="ap--right--img grid-b">
          <Image filename="template.jpeg" alt="Change this later" />
        </div>
        <div className="ap--right--img grid-c">
          <Image filename="template.jpeg" alt="Change this later" />
        </div>
        <div className="ap--right--img grid-d">
          <Image filename="template.jpeg" alt="Change this later" />
        </div>
      </div>
    </div>
  </AboutPageIntroStyles>
);

export default AboutPageIntro;
