import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import NET from '../../utils/vanta.net.min.js';

const AnimateHeaderBackgroundStyles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  canvas {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -2;
    width: 100%;
  }
`;
const WhiteHeaderBackground = ({
  vantaRef,
  vantaEffect,
  points,
  distance,
  spacing,
  background,
}) => {
  vantaRef = React.createRef(); // eslint-disable-line no-param-reassign

  useEffect(() => {
    vantaEffect = NET({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: false,
      gyroControls: false,
      scale: 1.0,
      minHeight: 200,
      minWidth: 200,
      points: `${points || 10}`,
      maxDistance: `${distance || 19.0}`,
      spacing: `${spacing || 25.0}`,
      scaleMobile: 1.0,
      color: 0x278a9c,
      backgroundColor: 0x000000,
      showDots: true,
    }).then;
    if (vantaEffect) {
      vantaEffect.destroy();
    }
  });

  return <AnimateHeaderBackgroundStyles ref={vantaRef} />;
};

export default WhiteHeaderBackground;
