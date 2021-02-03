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
const AnimateHeaderBackground = ({
  vantaRef,
  vantaEffect,
  points,
  distance,
  spacing,
}) => {
  vantaRef = React.createRef(); // eslint-disable-line no-param-reassign

  useEffect(() => {
    vantaEffect = NET({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      scale: 0.0,
      points: `${points || 11}`,
      maxDistance: `${distance || 25.0}`,
      spacing: `${spacing || 32.0}`,
      scaleMobile: 0.0,
      color: 0x278a9c,
      backgroundColor: 0x1a2536,
      showDots: true,
    }).then;
    if (vantaEffect) {
      vantaEffect.destroy();
    }
  });

  return <AnimateHeaderBackgroundStyles ref={vantaRef} />;
};

export default AnimateHeaderBackground;

// mouseControls: false,
// touchControls: false,
// gyroControls: false,
// scale: 0.0,
// points: 15.0,
// maxDistance: 20.0,
// spacing: 15.0,
// scaleMobile: 0.0,
// color: 0x278a9c,
// backgroundColor: 0x1a2536,
// showDots: true,
