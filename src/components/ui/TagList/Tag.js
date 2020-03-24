import React from 'react';
import { Box, useThemeUI } from 'theme-ui';

const Tag = ({ children }) => {
  const context = useThemeUI();
  const { theme } = context;

  return (
    <Box
      as="p"
      sx={{
        color: theme.colors.tag,
        borderRadius: ['20px', '20px', '1vw'],
        backgroundColor: theme.colors.black,
        padding: '7px 17px 5px 17px',
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
