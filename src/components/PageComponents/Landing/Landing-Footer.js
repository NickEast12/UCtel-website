import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const LandingFooterStyles = styled.footer`
  width: 100%;
  background-color: var(--lightBlue);
  .landing__footer {
    padding: 2rem 0;
    text-align: center;
    p {
      color: var(--white);
    }
  }
`;
const LandingFooter = () => (
  <LandingFooterStyles>
    <div className="landing__footer">
      <Link to="/privacy-policy">
        <p>Privacy policy</p>
      </Link>
    </div>
  </LandingFooterStyles>
);

export default LandingFooter;
