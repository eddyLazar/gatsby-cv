import React from 'react';
import { Box, Flex, Link, Text } from 'theme-ui';
import facebookSrc from './facebook.svg';
import githubSrc from './github.svg';
import instaSrc from './insta.svg';
import linkedinSrc from './linkedin.svg';
import twitterSrc from './twitter.svg';
import youtubeSrc from './youtube.svg';

const Contacts = ({
  email = '',
  phone = '',
  facebook = '',
  twitter = '',
  youtube = '',
  instagram = '',
  linkedin = '',
  github = '',
}) => (
  <Box mb="medium">
    <Text variant="lead" as="p" sx={{ width: 'max-content' }}>
      CONTACTS
    </Text>
    <Text variant="lead" as="p" sx={{ width: 'max-content' }}>
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
      {instagram && (
        <Link sx={iconBoxStyle} href={instagram} target="_blank">
          <img src={instaSrc} alt="youtube" />
        </Link>
      )}
      {linkedin && (
        <Link sx={iconBoxStyle} href={linkedin} target="_blank">
          <img src={linkedinSrc} alt="youtube" />
        </Link>
      )}
      {github && (
        <Link sx={iconBoxStyle} href={github} target="_blank">
          <img src={githubSrc} alt="github" />
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

export default Contacts;
