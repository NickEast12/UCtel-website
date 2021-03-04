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
      <SEO />
      <BlackHeader
        title="Private 5G"
        description="Driving Industry 4.0 with digital technology"
      />
      <main>
        <SolutionsIntro />
        <SolutionsMid />
        <NokiaDAC />
        <SuccessStoriesIntro
          quote="Smooth conversion to a seamless communication was of vital significance to us. UCtel understood our business and their delivery was flawless."
          name=""
          position="Central London Community Healthcare NHS Trust"
          img="nhs.jpeg"
          alt="Central London Community Healthcare NHS Trust"
          link="/case-studies/nhs-central-london-community-healthcare-nhs-trust"
        />
      </main>
    </Layout>
  );
};

export default PrivateFiveG;
