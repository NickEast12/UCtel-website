import React from 'react';
import styled from 'styled-components';
import Cookie from '../components/functional/Cookie';
import SEO from '../components/functional/SEO';
import Layout from '../components/Layout';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Background from '../assets/images/landing-page-bkg.png';
import Image from '../components/functional/Image';
import UCtelLogo from '../assets/images/UCtel-logo.png';
import StarIcon from '../svgs/star.svg';

const LandingPage = () => {
  const i = true;
  return (
    <main>
      <SEO
        title="Mobile Phone Signal Booster for Commercial Spaces | UCtel"
        description="Get a mobile phone signal booster for your commercial premises and enhance your call and data quality"
      />
      <GlobalStyles />
      <Typography />
      <Cookie />
      <main>
        <LandingPageHeader />
      </main>
    </main>
  );
};

export default LandingPage;

const LandingPageHeaderStyles = styled.section`
  width: 100%;
  position: relative;
  .l-h {
    width: 90%;
    margin: 0 auto;
    padding: 2.5rem 0 1rem 0;
    max-width: 900px;
    text-align: center;
    @media only screen and (min-width: 1024px) {
      width: 70%;
    }
    &__content {
      color: #fff;
      &__logo {
        img {
          width: 200px;
        }
      }
      h1 {
        color: #fff;
        margin: 1rem 0;
        font-weight: 700;
        font-size: 2.5rem;
        span {
          color: var(--orange);
        }
        @media only screen and (min-width: 375px) {
          font-size: 2.85rem;
        }
        @media only screen and (min-width: 768px) {
          padding-top: 5rem;
        }
        @media only screen and (min-width: 1280px) {
          padding-top: 2rem;
        }
      }
      h3 {
        font-weight: 400;
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #fff;
      }
      > p {
        color: #fff;
        margin-bottom: 2rem;
      }
      form {
        max-width: 600px;
        margin: 0.5rem auto;
        display: flex;
        flex-direction: column;
        @media only screen and (min-width: 768px) {
          flex-direction: row;
        }
        input,
        button {
          padding: 0.85rem;
          border: none;
          font-size: 1.1rem;
          color: #000;
          font-weight: 700;
        }
        input {
          width: 100%;
          border-radius: 4.5px 4.5px 0 0;
          &::placeholder {
            text-align: center;
          }
          @media only screen and (min-width: 1024px) {
            border-radius: 4.5px 0 0 4.5px;
          }
        }
        button {
          border-radius: 0 0 4.5px 4.5px;
          background-color: var(--lightBlue);
          width: 100%;
          span {
            color: #fff;
            font-size: 1rem;
          }
          @media only screen and (min-width: 768px) {
            width: 40%;
            border-radius: 0 4.5px 4.5px 0;
          }
        }
      }
      i {
        display: block;
        margin-top: 1rem;
        span {
          color: var(--orange);
        }
      }

      h5 {
        text-align: left;
        color: #fff;
        font-size: 1.05rem;
        font-weight: 200;
      }
      .l-b {
        /* background-color: white;
        border: solid 4px var(--lightBlue); */
        border-radius: 2px;
        padding: 1.25rem 1rem;
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        @media only screen and (min-width: 414px) {
          width: 80%;
          margin: 2rem auto 0 auto;
        }
        @media only screen and (min-width: 768px) {
          width: 100%;
          margin: 2rem auto 0 0;
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        @media only screen and (min-width: 1024px) {
        }
        section {
          width: 90%;
          margin: 0 auto;
          max-width: 200px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          svg {
            width: 30px;
            height: 30px;
            fill: var(--orange);
          }
        }
        p {
          max-width: 500px;
          color: #fff;
          margin-top: 1rem;
          text-align: center;
          @media only screen and (min-width: 768px) {
            margin-top: 0;
          }
        }
      }
    }
  }
  .bkg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -5;
    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
    }
    @media only screen and (min-width: 500px) {
      height: 110vh;
    }
  }
`;

const LandingPageHeader = () => (
  <LandingPageHeaderStyles>
    <div className="l-h">
      <div className="l-h__content">
        <div className="l-h__content__logo">
          <img src={UCtelLogo} alt="UCtel Logo" />
        </div>
        <h1>
          <span>Solve</span> poor indoor mobile signal <span>once</span> and{' '}
          <span>for all</span>
        </h1>
        <h3>Market-leading, Ofcom compliant solution</h3>
        <p>
          Make poor mobile signal a thing of the past – perfect for large
          buildings, difficult structures and any inside space needing better
          mobile signal coverage.
        </p>
        <form
          name="landingPageSignUp"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/successful-submission"
        >
          <input type="hidden" name="form-name" value="landingPageSignUp" />
          <p className="hidden">
            <label htmlFor="bot">
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
          />
          <button type="submit">
            <span>Get in touch</span>
          </button>
        </form>
        <i>
          <span>*</span> All we need is a floorplan, detail on what you need and
          and we can supply a no-obligation quote. <span>*</span>
        </i>
        <div className="l-b">
          <section>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </section>
          <p>
            Join countless organisations around the UK benefiting from excellent
            mobile signal, making missed calls and interrupted communications a
            pain point of the past.
          </p>
        </div>
      </div>
    </div>
    <div className="bkg">
      {/* <img src={Background} alt="background" /> */}
      <Image filename="landing-page-bkg.png" alt="background" />
    </div>
  </LandingPageHeaderStyles>
);
