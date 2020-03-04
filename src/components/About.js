import React from 'react';
import { Box, useThemeUI } from 'theme-ui';

export const About = ({ html }) => {
  const { theme } = useThemeUI();
  return (
    <Box
      sx={{ '& > p': theme.text.lead, mb: 'large' }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
