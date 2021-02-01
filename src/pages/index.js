import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
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
      />
      <LandingPage
        background="#1A2536"
        colour="#ffffff"
        lines="#278A9C"
        distance="175"
        value="20"
      />
      <LandingPage
        background="#000000"
        colour="#F39118"
        lines="#F39118"
        distance="90"
      />
      <LandingPage
        background="#1A2536"
        colour="#1A2536"
        lines="#278A9C"
        distance="80"
        value="200"
      />
    </Layout>
  </Mockup>
);

export default index;
