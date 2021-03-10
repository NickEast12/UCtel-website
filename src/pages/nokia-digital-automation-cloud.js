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
    <SEO
      title="Nokia Digital Automation Cloud | Unified Communications Solutions | UCtel"
      description="Addressing the need for critical wireless communication, private 5G is
        predicted to grow by £4.2bn in 2024"
    />
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
