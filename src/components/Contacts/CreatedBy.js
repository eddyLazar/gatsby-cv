import React from 'react';
import { Link, Text } from 'theme-ui';

export default () => (
  <Text
    as="p"
    variant="paragraph"
    sx={{
      margin: 0,
    }}
  >
    <div className="print-hide">
      Design by{' '}
      <Link
        href="https://www.kirillmartianov.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kirill Martianov
      </Link>
    </div>
  </Text>
);
