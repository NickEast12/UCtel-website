import React from 'react';
import Particles from 'react-tsparticles';
import styled from 'styled-components';

const ParticleStyles = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  .rparticles {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const ParticlesBackground = ({
  background,
  colour,
  lines,
  distance,
  value,
}) => (
  <ParticleStyles>
    <Particles
      id="tsparticles"
      className="rparticles"
      options={{
        background: {
          color: {
            value: `${background}`,
          },
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: `${colour}`,
          },
          links: {
            color: `${lines}`,
            distance: `${distance || 135}`,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 500,
            },
            value: `${value || 80}`,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 2,
          },
        },
        detectRetina: true,
      }}
    />
  </ParticleStyles>
);

export default ParticlesBackground;

// fpsLimit: 60,
