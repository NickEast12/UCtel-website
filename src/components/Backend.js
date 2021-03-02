import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Image from './functional/Image';
import ArrowIcon from '../svgs/right-arrow.svg';

const BackendStyles = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--slate);
  position: relative;
  .backend-wrapper {
    background-color: var(--white);
    width: 85%;
    margin: 0 auto;
    border-radius: 5px;
    position: absolute;
    left: calc(15% / 2);
    top: 5rem;
    padding: 2rem;
    text-align: center;
    h1 {
      font-size: 2.5rem;
    }
    p {
      margin-top: 1rem;
    }
    @media only screen and (min-width: 375px) {
      width: 80%;
      left: calc(20% / 2);
    }
    @media only screen and (min-width: 414px) {
      width: 70%;
      left: calc(30% / 2);
    }
    @media only screen and (min-width: 768px) {
      width: 50%;
      left: calc(50% / 2);
    }
  }
  @media only screen and (min-width: 1280px) {
    .max-width {
      max-width: 300px;
      margin: 0 auto;
      width: 100%;
      position: relative;
      .backend-wrapper {
        width: 100%;
        left: 0;
      }
    }
  }
`;
const Backend = ({ title, text, linkTag, children }) => (
  <BackendStyles>
    <div className="max-width">
      <div className="backend-wrapper">
        <section>
          {children}
          <h1>{title}</h1>
          <p>{text}</p>
          <Link to="/">
            <div className="fom">
              <ArrowIcon />
              <span>{linkTag}</span>
            </div>
          </Link>
        </section>
      </div>
    </div>
  </BackendStyles>
);

export default Backend;
