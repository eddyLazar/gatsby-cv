import React from 'react';
import { Box, Flex, useColorMode } from 'theme-ui';
import LayoutColumn from './LayoutColumn';
import { Heading, Paragraph } from './Typography';

const Header = ({ name = '', jobTitle = '' }) => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <LayoutColumn bg="primary">
      <Flex sx={{ justifyContent: 'space-between' }}>
        <Box>
          <Heading>{name}</Heading>
          <Paragraph>{jobTitle}</Paragraph>
        </Box>
        <Box>
          <button
            onClick={e => {
              setColorMode(colorMode === 'default' ? 'dark' : 'default');
            }}
          >
            Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
          </button>
        </Box>
      </Flex>
    </LayoutColumn>
  );
};

export default Header;
