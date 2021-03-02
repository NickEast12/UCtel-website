import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Backend from '../components/Backend';
import Image from '../components/functional/Image';

const FourZeroFourStyled = styled.div`
  width: 100%;
  margin: 0 auto 2rem auto;
  text-align: center;
  .gatsby-image-wrapper {
    width: 100%;
    max-width: 250px;
    margin: 0 auto;
  }
`;
const FourZeroFour = () => (
  <main>
    <GlobalStyles />
    <Typography />
    <Backend
      title="404"
      text="That page you were looking for doesn't exist"
      linkTag="Return home"
    >
      <FourZeroFourStyled>
        <Image filename="UCtel-logo.png" alt="UCtel logo" />
      </FourZeroFourStyled>
    </Backend>
  </main>
);

export default FourZeroFour;
