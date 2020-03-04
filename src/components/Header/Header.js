import React from 'react';
import { Box, Flex, Text, useColorMode } from 'theme-ui';
import ThemeToggle from '../ui/ThemeToggle';

const Header = ({ name = '', jobTitle = '' }) => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Box bg="primary" padding="medium">
      <Flex sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Text variant="heading" mb="medium">
            Eduard
            <br />
            Lazarenko
          </Text>
          <Text variant="p">{jobTitle}</Text>
        </Box>
        <ThemeToggle
          onClick={e => {
            setColorMode(colorMode === 'default' ? 'dark' : 'default');
          }}
        />
      </Flex>
    </Box>
  );
};

export default Header;
