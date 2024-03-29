import React from 'react';
import { Box } from 'theme-ui';
import Tag from './Tag';

const TagList = ({ tags = [''] }) => (
  <Box marginBottom="large">
    <div />
    {tags.map(tag => (
      <Box
        className="print-tag"
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
