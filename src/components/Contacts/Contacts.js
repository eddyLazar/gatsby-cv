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
  <Box mb="medium">
    <Text variant="lead">CONTACTS</Text>
    <Text variant="lead">
      <Link href={`mailto:${email}`}>{email}</Link>
      <br />
      <Link href={`tel:${phone}`}>{phone}</Link>
    </Text>
    <Flex>
      {facebook && (
        <Link sx={iconBoxStyle} href={facebook} target="_blank">
          <img src={facebookSrc} alt="facebook" />
        </Link>
      )}
      {twitter && (
        <Link sx={iconBoxStyle} href={twitter} target="_blank">
          <img src={twitterSrc} alt="twitter" />
        </Link>
      )}
      {youtube && (
        <Link sx={iconBoxStyle} href={youtube} target="_blank">
          <img src={youtubeSrc} alt="youtube" />
        </Link>
      )}
    </Flex>
  </Box>
);

const iconBoxStyle = {
  width: 30,
  height: 30,
  display: 'block',
  marginRight: 10,
};

export default Bio;
