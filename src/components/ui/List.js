import React from 'react';
import { Box, Text } from 'theme-ui';

const Bio = ({ items = [{ text: '', additional: '' }] }) => (
  <Box mb="large">
    {items.map(({ text, additional }, i) => (
      <Box key={i}>
        <Text variant="lead" mb={0}>
          {text}
        </Text>
        <Text variant="lead" color="muted" sx={{ fontStyle: 'italic' }}>
          {additional}
        </Text>
      </Box>
    ))}
  </Box>
);
export default Bio;