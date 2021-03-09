import React from 'react';
import SEO from '../../components/functional/SEO';
import Layout from '../../components/Layout';
import BlackHeader from '../../components/PageComponents/BlackHeader';
import NokiaDAC from '../../components/PageComponents/SolutionsComponents/NokiaDAC';
import SolutionsIntro from '../../components/PageComponents/SolutionsComponents/solutionsIntro';
import SolutionsMid from '../../components/PageComponents/SolutionsComponents/solutionsMid';
import SuccessStoriesIntro from '../../components/PageComponents/SuccessStoriesIntro';

const PrivateFiveG = ({ pageContext }) => {
  const i = true;
  return (
    <Layout pageContext={pageContext}>
      <SEO
        title="Private 5G Networks | Unified Communications Solutions | UCtel"
        description="Private 5G creates a dedicated, private network with unified connectivity, offering full control of critical business applications and communications"
      />
      <BlackHeader
        title="Private 5G networks"
        description="Driving Industry 4.0 with digital technology"
      />
      <main>
        <SolutionsIntro />
        <SolutionsMid />
        <NokiaDAC />
      </main>
    </Layout>
  );
};

export default PrivateFiveG;
