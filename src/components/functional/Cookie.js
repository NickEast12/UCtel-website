import { Link } from 'gatsby';
import React from 'react';
import CookieConsent from 'react-cookie-consent';

import styled from 'styled-components';

// const CookieStyles = styled.div`
//   width: 100%;
//   position: fixed;
//   bottom: 11rem;
//   width: 100%;
//   height: 4rem;
//   z-index: 9999;
//   .cookie__wrapper {
//     text-align: center;
//     width: 85%;
//     margin: 0 auto;
//     background: var(--slate);
//     padding: 2rem;
//     border-radius: 4.5px;
//     justify-content: center;
//     align-items: center;
//     button {
//       margin-top: 15px;
//       width: 70%;
//       color: var(--black);
//       background-color: var(--orange);
//       border: none;
//       border-radius: 4.5px;
//       padding: 0.65rem 0;
//       font-size: 1rem;
//     }
//     p {
//       font-size: 0.95rem;
//       color: var(--white);
//       span {
//         text-decoration: underline;
//       }
//     }
//     @media only screen and (min-width: 768px) {
//       width: 50%;
//     }
//   }
//   @media only screen and (min-width: 1280px) {
//     bottom: 11rem;

//     .cookie__wrapper {
//       margin: 0 auto 0 2rem;
//       width: 30%;
//       max-width: 500px;
//     }
//   }
// `;
const Cookie = () => (
  <CookieConsent
    location="bottom"
    buttonText="Accept"
    cookieName="gatsby-gdpr-google-analytics"
    disableStyles
    containerClasses="cookie__wrapper"
    contentClasses="cookie__wrapper__content"
    buttonClasses="btn-custom-class"
  >
    <p>
      This website uses cookies. By using this website you consent to our use of
      these cookies. For more information visit our{' '}
      <Link to="/privacy-policy">
        <span> Privacy Policy</span>
      </Link>
    </p>
  </CookieConsent>
);

export default Cookie;

{
  /* <CookieStyles>
<div className="cookie">
</div>
  </CookieStyles> */
}
