import React from 'react';
import { Text } from 'theme-ui';

const LanguageList = ({ languages = [''] }) => (
  <React.Fragment>
    <Text variant="lead">SPOKEN LANGUAGES</Text>
    <Text variant="lead">
      {languages.map((lang, i) => (
        <span key={i}>
          {lang}
          <br />
        </span>
      ))}
    </Text>
  </React.Fragment>
);

export default LanguageList;
