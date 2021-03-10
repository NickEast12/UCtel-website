import { Link } from 'gatsby';
import React from 'react';
import CookieConsent from 'react-cookie-consent';

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
