import React from 'react';
import styled from 'styled-components';

const LandingIntroStyles = styled.section`
  width: 100%;
  .landing__intro {
    width: 90%;
    margin: 0 auto;
    text-align: center;
    padding: 3rem 0;
    h2 {
      font-size: 1.95rem;
    }
    p {
      margin-top: 1rem;
    }
  }
`;
const LandingIntro = () => (
  <LandingIntroStyles>
    <div className="landing__intro">
      <h2>Industrial internet everywhere.</h2>
      <p>
        Industry 4.0 is revolutionising businesses across the globe – allowing
        for adoption of digital technologies such as AI, IoT and big data.
        However, with Wi-Fi and existing cellular network limitations, Nokia and
        UCtel are committed to providing an alternative network which transforms
        what is possible: private 5G.
      </p>
    </div>
  </LandingIntroStyles>
);

export default LandingIntro;
