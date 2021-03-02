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
      text="You've sucessfully signed up for our mailing list, thank you!"
      linkTag="Return home"
    />
  </main>
);

export default EmailSignUpSuccess;
