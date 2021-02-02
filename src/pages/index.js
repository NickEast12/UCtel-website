import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import AltLandingPage from '../components/PageComponents/AltLanding';
import LandingPage from '../components/PageComponents/Landing';

const Mockup = styled.main`
  width: 100%;
`;

const index = () => (
  <Mockup>
    <Layout>
      <LandingPage
        background="#ffffff"
        colour="#ffffff"
        lines="#278A9C"
        darkTheme
        title="Mobile boosting | Private 5G | Unified Communications"
        description="Market leading technology keeping you connected"
      />
      <LandingPage
        background="#1A2536"
        colour="#ffffff"
        lines="#278A9C"
        distance="175"
        value="20"
        subtitle="Always on"
        title="Mobile boosting | Private 5G | Unified Communications"
        description="We have it covered"
      />
      <LandingPage
        background="#000000"
        colour="#F39118"
        lines="#F39118"
        distance="90"
        subtitle="Get Connected"
        title="Mobile boosting | Private 5G | Unified Communications"
        description="Leading the way in connectivity."
      />
      <LandingPage
        background="#1A2536"
        colour="#1A2536"
        lines="#278A9C"
        distance="80"
        value="200"
        subtitle="Get Connected"
        title="Mobile boosting | Private 5G | Unified Communications"
        description="Market leading technology keeping you connected"
      />
      <AltLandingPage
        title="Mobile boosting | Private 5G | Unified Communications"
        description="Market leading technology keeping you connected."
      />
    </Layout>
  </Mockup>
);

export default index;
