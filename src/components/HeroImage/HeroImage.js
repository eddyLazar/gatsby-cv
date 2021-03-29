import React from 'react';
import { Box, useThemeUI } from 'theme-ui';
import SailImage from './sail.inline.svg';

export const HeroImage = ({ html }) => {
  const { theme } = useThemeUI();

  return (
    <Box
      className="hero-image"
      sx={{
        width: '100%',
        height: [
          `${theme.space.x * 8.5 * 2}vw`,
          `${theme.space.x * 8.5 * 2}vw`,
          `${theme.space.x * 8.5}vw`,
        ],
        bg: theme.colors.black,
        position: 'relative',
        '& svg path': {
          fill: 'white',
        },
      }}
    >
      <SailImage
        style={{
          width: '100%',
          position: 'absolute',
          bottom: -1,
          height: 'auto',
        }}
      />
    </Box>
  );
};
