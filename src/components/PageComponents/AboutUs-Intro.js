import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Image from '../functional/Image';
import ArrowIcon from '../../svgs/right-arrow.svg';

const AboutUsIntroStyles = styled.div`
  width: 100%;
  .aboutus {
    padding: 3rem 0;
    width: 90%;
    margin: 0 auto;
    &--image {
      width: 95%;
      margin: 0 auto 0 0;
    }
    &--content {
      padding-top: 2.5rem;
      color: var(--slate);
      h3 {
        font-size: 1.85rem;
        margin: 0.5rem 0;
      }
      p {
        margin-bottom: 0.5rem;
        font-size: 0.95rem;
      }
    }
  }
`;
const AboutUsIntro = () => (
  <AboutUsIntroStyles>
    <div className="aboutus">
      <div className="aboutus--image img-decoration">
        <Image filename="template.jpeg" alt="This will change" />
      </div>
      <div className="aboutus--content">
        <h6 className="subtitle">About us</h6>
        <h3>Your communication experts</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit aspernatur fugit velit necessitatibus numquam est
          sapiente facilis. Earum eaque unde quas molestias laboriosam
          necessitatibus doloremque.
        </p>
        <Link to="/">
          <div className="fom">
            <ArrowIcon />
            <span>Find out more</span>
          </div>
        </Link>
      </div>
    </div>
  </AboutUsIntroStyles>
);

export default AboutUsIntro;