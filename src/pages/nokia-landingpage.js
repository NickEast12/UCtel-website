import React from 'react';
import Layout from '../components/Layout';
import LandingHeader from '../components/PageComponents/Landing/Landing-header.js';
import LandingInfo from '../components/PageComponents/Landing/Landing-Info';
import LandingIntro from '../components/PageComponents/Landing/Landing-Intro';
import LandingLower from '../components/PageComponents/Landing/Landing-lower';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import { MainFooter } from '../components/Footer';

const NokiaLandingPage = ({ pageContext }) => (
  <main>
    <GlobalStyles />
    <Typography />
    <LandingHeader />
    <main>
      <LandingIntro />
      <LandingInfo />
      <LandingLower />
    </main>
    <MainFooter />
  </main>
);

export default NokiaLandingPage;
