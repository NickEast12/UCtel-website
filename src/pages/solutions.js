import React from 'react';
import styled from 'styled-components';
import SEO from '../components/functional/SEO';
import Layout from '../components/Layout';
import BlackHeader from '../components/PageComponents/BlackHeader';
import SolutionsIntro from '../components/PageComponents/SolutionsIntro';

const SolutionStyles = styled.section`
  width: 100%;
`;
const Solutions = ({ pageContext }) => (
  <Layout pageContext={pageContext}>
    <SEO />
    <main>
      <BlackHeader title="Our Solutions" />
      <SolutionStyles>
        <SolutionsIntro />
      </SolutionStyles>
    </main>
  </Layout>
);

export default Solutions;
