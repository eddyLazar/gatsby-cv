import React from 'react';
import { Box, useThemeUI } from 'theme-ui';

const Tag = ({ children }) => {
  const context = useThemeUI();
  const { theme } = context;

  return (
    <Box
      sx={{
        color: theme.colors.tag,
        borderRadius: '1vw',
        backgroundColor: theme.colors.black,
        padding: '5px 17px',
        fontSize: ['17px', '17px', '17px', 'medium'],
        lineHeight: ['17px', '17px', '17px', theme.fontSizes.medium],
        display: 'inline-block',
      }}
    >
      {children}
    </Box>
  );
};

export default Tag;
