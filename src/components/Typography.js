import React from 'react';
import { Text } from 'theme-ui';

export const Heading = props => {
  return <Text variant="heading" {...props} />;
};

export const Paragraph = ({ isLead = false, ...props }) => {
  const { sx = {} } = props;

  return (
    <Text
      {...props}
      sx={{ ...sx, textTransform: isLead ? 'uppercase' : 'none' }}
      variant="paragraph"
    />
  );
};
