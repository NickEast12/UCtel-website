import React from 'react';
import Backend from '../components/Backend';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const EmailSignUpSuccess = () => (
  <main>
    <GlobalStyles />
    <Typography />
    <Backend
      title="Success!"
      text="Thanks, one of our team will be in contact soon"
      linkTag="Return home"
    />
  </main>
);

export default EmailSignUpSuccess;
