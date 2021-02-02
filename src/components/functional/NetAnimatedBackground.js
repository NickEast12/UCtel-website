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
class AnimateHeaderBackground extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = NET({
      el: this.vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      scale: 1.0,
      points: 16.0,
      maxDistance: 35.0,
      spacing: 28.0,
      scaleMobile: 1.0,
      color: 0x278a9c,
      backgroundColor: 0x1a2536,
      showDots: true,
    });
  }

  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }

  render() {
    return <AnimateHeaderBackgroundStyles ref={this.vantaRef} />;
  }
}

export default AnimateHeaderBackground;
