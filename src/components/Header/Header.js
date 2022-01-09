import React from 'react';
import { Box, Flex, Text, useColorMode, useThemeUI } from 'theme-ui';
import { HeroImage } from '../HeroImage/HeroImage';
import ThemeToggle from '../ui/ThemeToggle';

const Header = ({ jobTitle = '' }) => {
  const [colorMode, setColorMode] = useColorMode();
  const { theme } = useThemeUI();

  return (
    <Box>
      <Flex
        bg="primary"
        padding="medium"
        sx={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}
      >
        <Box
          sx={{ width: ['50%', '50%', `${theme.space.x * 13}vw`], zIndex: 1 }}
        >
          <Text variant="heading" mb="small" as="h1" sx={{ zIndex: 1 }}>
            Eduard
            <br />
            Lazarenko
          </Text>
          <Text variant="p" mb="medium" sx={{ zIndex: 1 }} as="p">
            {jobTitle}
          </Text>
        </Box>

        <ThemeToggle
          onClick={e => {
            setColorMode(colorMode === 'default' ? 'dark' : 'default');
          }}
        />
      </Flex>
      <HeroImage />
    </Box>
  );
};

export default Header;
