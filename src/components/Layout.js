import React from 'react';
import { Box, Flex, Text } from 'theme-ui';
import InversionClick from './ui/InversionClick';

export const Layout = ({ children }) => (
  <InversionClick>
    <Flex
      className="column-wrapper"
      sx={{
        height: ['initial', 'initial', '100%'],
        overflow: ['scroll', 'scroll', 'hidden'],
        flexDirection: ['column', 'column', 'row'],
        maxHeight: '100vh',
      }}
    >
      {children}
    </Flex>
  </InversionClick>
);

export const MainColumn = ({ children, header = null }) => (
  <Box
    className="main-column"
    sx={{
      width: ['100%', '100%', '50%'],
      ...columnStyle,
      p: 0,
      bg: 'white',
      pageBreakAfter: 'auto',
    }}
  >
    {header}
    <Box p="medium">{children}</Box>
  </Box>
);

export const SkillsColumn = ({ children }) => (
  <Box
    className="skills-column"
    sx={{
      bg: 'gray1',
      width: ['100%', '100%', '25%'],
      pageBreakInside: 'avoid',
      ...columnStyle,
    }}
  >
    <Text variant="heading" color="gray2" as="h2">
      skills
    </Text>
    {children}
  </Box>
);

export const ExperienceColumn = ({ children }) => (
  <Box
    className="experience-column"
    sx={{
      bg: 'black',
      width: ['100%', '100%', '25%'],
      ...columnStyle,
    }}
  >
    <Text variant="heading" color="gray4" as="h2">
      experience
    </Text>
    {children}
  </Box>
);

const columnStyle = {
  overflowY: ['visible', 'visible', 'scroll'],
  padding: 'medium',
};
