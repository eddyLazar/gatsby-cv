import React from 'react';
import { Box, Image, useColorMode, useThemeUI } from 'theme-ui';
import unionSrc from './union.svg';
import unionBlackSrc from './union_black.svg';

export const HeroImage = ({ html }) => {
  const [colorMode] = useColorMode();
  const imageSrc = colorMode === 'dark' ? unionBlackSrc : unionSrc;
  const { theme } = useThemeUI();

  console.log(theme.colors.black);

  return (
    <Box
      sx={{
        width: '100%',
        height: `${theme.space.x * 8.5}vw`,
        bg: theme.colors.black,
        position: 'relative',
      }}
    >
      <Image
        src={imageSrc}
        alt="picture inspired by surfing"
        sx={{
          width: '110%',
          maxWidth: 'none',
          position: 'absolute',
          bottom: -1,
          right: 0,
        }}
      />
    </Box>
  );
};
