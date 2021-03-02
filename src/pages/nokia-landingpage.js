import React from 'react';
import Layout from '../components/Layout';
import LandingHeader from '../components/PageComponents/Landing/Landing-header.js';
import LandingInfo from '../components/PageComponents/Landing/Landing-Info';
import LandingIntro from '../components/PageComponents/Landing/Landing-Intro';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const NokiaLandingPage = ({ pageContext }) => (
  <main>
    <GlobalStyles />
    <Typography />
    <LandingHeader />
    <main>
      <LandingIntro />
      <LandingInfo />
    </main>
  </main>
);

export default NokiaLandingPage;
