import React from 'react';
import Cookie from '../components/functional/Cookie';
import Layout from '../components/Layout';
import LandingFooter from '../components/PageComponents/Landing/Landing-Footer';
import LandingHeader from '../components/PageComponents/Landing/Landing-header.js';
import LandingInfo from '../components/PageComponents/Landing/Landing-Info';
import LandingIntro from '../components/PageComponents/Landing/Landing-Intro';
import LandingLower from '../components/PageComponents/Landing/Landing-lower';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import SEO from '../components/functional/SEO';

const NokiaLandingPage = ({ pageContext }) => (
  <main>
    <SEO />
    <GlobalStyles />
    <Typography />
    <LandingHeader />
    <Cookie />
    <main>
      <LandingIntro />
      <LandingInfo />
      <LandingLower />
    </main>
    <LandingFooter />
  </main>
);

export default NokiaLandingPage;
