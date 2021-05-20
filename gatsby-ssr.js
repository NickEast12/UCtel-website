import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-36305332-1"
    />,
  ]);
  setHeadComponents([
      <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-36305332-1');
</script>
  ])
};

