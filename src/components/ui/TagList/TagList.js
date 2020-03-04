import React from 'react';
import { Box } from 'theme-ui';
import Tag from './Tag';

const TagList = ({ tags = [''] }) => (
  <Box marginBottom="large">
    {tags.map(tag => (
      <Box
        key={tag}
        sx={{
          display: 'inline-block',
          marginRight: '6px',
          marginBottom: '10px',
        }}
      >
        <Tag>{tag}</Tag>
      </Box>
    ))}
  </Box>
);

export default TagList;
