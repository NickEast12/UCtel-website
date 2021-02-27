import React from 'react';
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
      <BlackHeader
        title="Private 5G"
        description="Driving Industry 4.0 with digital technology"
      />
      <main>
        <SolutionsIntro />
        <SolutionsMid />
        <NokiaDAC />
        <SuccessStoriesIntro />
      </main>
    </Layout>
  );
};

export default PrivateFiveG;
