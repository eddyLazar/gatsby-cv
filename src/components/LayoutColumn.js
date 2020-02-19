import React from 'react';
import { Box } from 'theme-ui';
import useTheme from '../hooks/useTheme';

const LayoutColumn = props => {
  const { spacebar } = useTheme();
  return <Box {...props} sx={{ padding: spacebar }} />;
};

export default LayoutColumn;
