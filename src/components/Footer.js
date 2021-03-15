import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Image from './functional/Image';
import TwitterIcon from '../svgs/twitter.svg';
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
  box-shadow: 0 2px 2px -2px rgb(0 0 0 / 20%);
  .footerCTA {
    padding: 3rem 0 2rem 0;
    color: var(--white);
    width: 90%;
    margin: 0 auto;
    text-align: center;
    margin: 0 auto;
    max-width: 1100px;
    &--content {
      h4 {
        font-size: 1.75rem;
        color: var(--white);
      }
      p {
        margin: 1rem 0;
        color: var(--white);
      }
    }
    &--btn {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 0.5rem;
      margin-top: 2rem;
      @media only screen and (min-width: 414px) {
        grid-gap: 1rem;
      }
      @media only screen and (min-width: 701px) {
        margin: 0;
      }
      button {
        width: 100%;
        padding: 0.75rem 0;
        span {
          font-size: 1rem;
        }
      }
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
    @media only screen and (min-width: 701px) {
      width: 90%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
      padding-bottom: 3rem;
      &--content {
        text-align: left;
      }
      a {
        margin: 0;
        padding: 0;
        width: 100%;
      }
      &--btn {
        display: flex;
      }
    }
    @media only screen and (min-width: 1024px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &--btn {
        width: 400px;
      }
    }
  }
`;
const FooterCTA = () => (
  <FooterCTAStyles>
    <div className="footerCTA">
      <div className="footerCTA--content">
        <h4>Contact UCtel and unlock better connectivity today</h4>
        {/* <p>What do you want the user to do?</p> */}
      </div>
      <div className="footerCTA--btn">
        <Link to="/get-started">
          <button type="button" className="btn btn--main">
            <span>Get started</span>
          </button>
        </Link>
        <Link to="/contact">
          <button type="button" className="btn btn--alt">
            <span>Talk to an expert</span>
          </button>
        </Link>
      </div>
    </div>
  </FooterCTAStyles>
);

const MainFooterStyles = styled.div`
  width: 100%;
  background-color: var(--darkBlue);
  .footer__main {
    padding: 2rem 0;
    width: 90%;
    margin: 0 auto;
    max-width: 1100px;
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
          font-size: 0.85rem;
          &:hover {
            color: var(--lightBlue);
          }
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
            font-size: 0.85rem;
            transition: color 0.25s ease;
            &:hover {
              color: var(--white);
            }
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
          &:hover {
            fill: var(--lightBlue);
          }
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
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
    @media only screen and (min-width: 701px) {
      width: 90%;
      &__img {
        width: 100%;
        margin: 0 auto;
        grid-area: b;
        .gatsby-image-wrapper {
          width: 80%;
          margin: 0 auto;
        }
      }
      .footer--grid {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 'a b';
        grid-gap: 4rem;
      }

      &__address {
        margin-top: 0;
        section {
          padding: 0;
        }
      }
      &__links {
        display: flex;
        justify-content: space-between;
        width: 450px;
        margin: 0;
      }
    }
    @media only screen and (min-width: 1280px) {
      .footer--grid {
        .footer__main__img {
          width: 50%;
          margin: 0 0 0 auto;
          .gatsby-image-wrapper {
            width: 100%;
            margin: 0 auto;
          }
        }
      }
    }
  }
`;

export const MainFooter = () => (
  <MainFooterStyles>
    <div className="footer__main">
      <div className="footer--grid">
        <div className="footer__main__img">
          <Image filename="UCtel-logo.png" alt="UCtel Logo" />
        </div>
        {/* <div className="footer__main__address">
          <section>
            <h6>Our Office</h6>
            <p>
              <a
                href="http://maps.google.com/?q=UCtel Ltd, Leatherhead"
                target="__blank"
              >
                75 Cannon Grove,
                <br /> Fetcham,
                <br /> Leatherhead,
                <br /> Surrey,
                <br /> KT22 9LP
              </a>
            </p>
          </section>
        </div> */}
        <div className="footer__main__links">
          <section>
            <h6>Solutions</h6>
            <ul>
              <li>
                <Link to="/solutions/in-building-mobile-signal-solutions">
                  In-Building mobile signal solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions/private-5g-networks">
                  Private 5G networks
                </Link>
              </li>
              <li>
                <Link to="/solutions/unified-communications-and-contact-centre">
                  Unified Communications and Contact Centre
                </Link>
              </li>
            </ul>
          </section>
          <section>
            <h6>Company</h6>
            <ul>
              <li>
                <Link to="/about-us">About us</Link>
              </li>
              <li>
                <Link to="/blogs">Blog</Link>
              </li>
              <li>
                <Link to="/case-studies">Case studies</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/get-started">Get started</Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div className="footer__main__lower">
        <section className="icons">
          <a
            href="https://twitter.com/UCtel_Ltd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://www.linkedin.com/company/uctel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
        </section>
        <section className="legal">
          <p>&copy; {new Date().getFullYear()} UCtel </p>
          <Link to="/privacy-policy">
            <p>Privacy Policy</p>
          </Link>
        </section>
      </div>
    </div>
  </MainFooterStyles>
);
