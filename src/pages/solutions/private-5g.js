import React from 'react';
import Layout from '../../components/Layout';
import BlackHeader from '../../components/PageComponents/BlackHeader';
import NokiaDAC from '../../components/PageComponents/SolutionsComponents/NokiaDAC';
import SolutionsIntro from '../../components/PageComponents/SolutionsComponents/solutionsIntro';
import SolutionsMid from '../../components/PageComponents/SolutionsComponents/solutionsMid';
import SuccessStoriesIntro from '../../components/PageComponents/SuccessStoriesIntro';

const PrivateFiveG = () => {
  const i = true;
  return (
    <Layout>
      <BlackHeader title="Private 5G" description="Fill this in" />
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
