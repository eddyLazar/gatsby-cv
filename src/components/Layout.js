import React from 'react';
import { Box, Flex, Text } from 'theme-ui';
// import InversionClick from './ui/InversionClick';

export const Layout = ({ children }) => (
  <Flex
    sx={{
      height: ['initial', 'initial', '100%'],
      overflow: ['scroll', 'scroll', 'hidden'],
      flexDirection: ['column', 'column', 'row'],
    }}
  >
    {children}
  </Flex>
);

export const MainColumn = ({ children, header = null }) => (
  <Box
    sx={{ width: ['100%', '100%', '50%'], ...columnStyle, p: 0, bg: 'white' }}
  >
    {header}
    <Box p="medium">{children}</Box>
  </Box>
);

export const SkillsColumn = ({ children }) => (
  <Box
    sx={{
      bg: 'gray1',
      width: ['100%', '100%', '25%'],
      ...columnStyle,
    }}
  >
    <Text variant="heading" color="gray2">
      skills
    </Text>
    {children}
  </Box>
);

export const ExperienceColumn = ({ children }) => (
  <Box
    sx={{
      bg: 'black',
      width: ['100%', '100%', '25%'],
      ...columnStyle,
    }}
  >
    <Text variant="heading" color="gray4">
      experience
    </Text>
    {children}
  </Box>
);

const columnStyle = {
  overflowY: 'scroll',
  padding: 'medium',
};
