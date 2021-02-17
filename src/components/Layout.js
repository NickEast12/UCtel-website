import React from 'react';
import 'normalize.css';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography.js';
import Nav from './Nav';
import Footer from './Footer';

const MainBodyStyles = styled.div`
  width: 100%;
`;

const Layout = ({ children, alt }) => (
  <>
    <GlobalStyles />
    <Typography />
    <MainBodyStyles>
      <Nav alt={alt} />
      {children}
      <Footer />
    </MainBodyStyles>
  </>
);

export default Layout;
