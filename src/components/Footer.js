import React from 'react';
import styled from 'styled-components';
import Image from './functional/Image';
import TwitterIcon from '../svgs/twitter.svg';
import InstagramIcon from '../svgs/instagram.svg';
import LinkedInIcon from '../svgs/linkedin.svg';
import Bread from './functional/Breadcrums';

const FooterStyles = styled.footer`
  width: 100%;
`;
const Footer = ({ pageContext }) => (
  <FooterStyles>
    <Breadcrums pageContext={pageContext} />
    <FooterCTA />
    <MainFooter />
  </FooterStyles>
);

export default Footer;
const BreadcrumsStyles = styled.div`
  width: 100%;
  background-color: var(--ghostWhite);
  padding: 1rem;
`;
const Breadcrums = ({ pageContext }) => (
  <BreadcrumsStyles>
    <Bread breaddata={pageContext.breadcrumb} />
  </BreadcrumsStyles>
);

const FooterCTAStyles = styled.div`
  width: 100%;
  background-color: var(--darkBlue);
  .footerCTA {
    padding: 3rem 0 2rem 0;
    color: var(--white);
    width: 90%;
    margin: 0 auto;
    text-align: center;
    width: 80%;
    margin: 0 auto;
    h4 {
      font-size: 1.75rem;
      color: var(--white);
    }
    p {
      margin: 1rem 0;
      color: var(--white);
    }
    button {
      margin: 1rem 0;
      width: 70%;
      padding: 0.75rem 0;
      span {
        font-size: 1rem;
      }
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
  }
`;
const FooterCTA = () => (
  <FooterCTAStyles>
    <div className="footerCTA">
      <h4>A catchy call to action will go here!</h4>
      <p>What do you want the user to do?</p>
      <button type="button" className="btn btn--main">
        <span>Get Started</span>
      </button>
    </div>
  </FooterCTAStyles>
);

const MainFooterStyles = styled.div`
  width: 100%;
  background-color: var(--darkBlue);

  /* background-color: rgba(26, 37, 53, 1); */
  .footer__main {
    padding: 2rem 0;
    width: 90%;
    margin: 0 auto;
    &__img {
      width: 40%;
      margin: 1rem auto 0 0;
      .gatsby-image-wrapper {
        width: 130px;
      }
    }
    &__address {
      margin-top: 1.5em;
      section {
        color: var(--ghostWhite);
        padding: 1rem 0;
        h6 {
          font-size: 1rem;
          color: var(--white);
        }
        p {
          padding-top: 0.5rem;
          color: rgba(255, 255, 255, 0.5);
        }
      }
    }
    &__links {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 0.5rem;
      margin: 1.5rem 0;
      section {
        h6 {
          font-size: 1rem;
          color: var(--ghostWhite);
          font-family: Gellix-SemiBold;
        }
        ul {
          list-style: none;
          padding-top: 0.25rem;
          li {
            color: rgba(255, 255, 255, 0.5);
            margin-top: 6px;
            font-family: Gellix-Regular;
          }
        }
      }
    }
    &__lower {
      .icons {
        padding: 1rem 0;
        svg {
          fill: var(--white);
          width: 20px;
          margin-right: 10px;
        }
      }
      .legal {
        margin-top: 0.5rem;
        display: flex;
        justify-content: space-between;
        p {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.85rem;
        }
      }
    }
  }
`;

const MainFooter = () => (
  <MainFooterStyles>
    <div className="footer__main">
      <div className="footer__main__img">
        <Image filename="UCtel-logo.png" alt="UCtel Logo" />
      </div>
      <div className="footer__main__address">
        <section>
          <h6>Our Office</h6>
          <p>
            Nutcracker Agency <br />
            Salatin House <br />
            19 Cedar Road <br />
            Sutton <br />
            SM2 5DA
          </p>
        </section>
      </div>
      <div className="footer__main__links">
        <section>
          <h6>Solutions</h6>
          <ul>
            <li>Private 5G</li>
            <li>Unified Communications</li>
            <li>In-Building Mobile Connectivity </li>
          </ul>
        </section>
        <section>
          <h6>Company</h6>
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Case studies</li>
            <li>Contact</li>
            <li>Get started</li>
          </ul>
        </section>
      </div>
      <div className="footer__main__lower">
        <section className="icons">
          <TwitterIcon />
          <LinkedInIcon />
          <InstagramIcon />
        </section>
        <section className="legal">
          <p>&copy; {new Date().getFullYear()} UCtel </p>
          <p>Privacy Policy</p>
        </section>
      </div>
    </div>
  </MainFooterStyles>
);
