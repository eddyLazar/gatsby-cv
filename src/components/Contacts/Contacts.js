import React from 'react';
import { Box, Flex, Link, Text } from 'theme-ui';
import facebookSrc from './facebook.svg';
import twitterSrc from './twitter.svg';
import youtubeSrc from './youtube.svg';

const Bio = ({
  email = '',
  phone = '',
  facebook = '',
  twitter = '',
  youtube = '',
}) => (
  <Box>
    <Text variant="lead">CONTACTS</Text>
    <Text variant="lead">
      <Link href={`mailto:${email}`}>{email}</Link>
      <br />
      <Link href={`tel:${phone}`}>{phone}</Link>
    </Text>
    <Flex sx={{ '& > div': { mr: '10px' } }}>
      {facebook && (
        <Box>
          <Link href={facebook} target="_blank">
            <img src={facebookSrc} alt="facebook" />
          </Link>
        </Box>
      )}
      {twitter && (
        <Box>
          <Link href={twitter} target="_blank">
            <img src={twitterSrc} alt="twitter" />
          </Link>
        </Box>
      )}
      {youtube && (
        <Box>
          <Link href={youtube} target="_blank">
            <img src={youtubeSrc} alt="youtube" />
          </Link>
        </Box>
      )}
    </Flex>
  </Box>
);
export default Bio;
