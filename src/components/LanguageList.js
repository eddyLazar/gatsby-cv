import React from 'react';
import { Box, Text } from 'theme-ui';

const LanguageList = ({ languages = [''] }) => (
  <React.Fragment>
    <Text variant="lead" as="p">
      SPOKEN LANGUAGES
    </Text>
    <Box marginBottom="large">
      {languages.map((lang, i) => (
        <Text key={i} as="p" variant="lead" mb={0}>
          {lang}
        </Text>
      ))}
    </Box>
  </React.Fragment>
);

export default LanguageList;
