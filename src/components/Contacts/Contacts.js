import React from 'react';
import { Box, Flex, Link, Text } from 'theme-ui';
import CreatedBy from './CreatedBy';
import FacebookSvg from './facebook.inline.svg';
import GithubSvg from './github.inline.svg';
import InstaSvg from './insta.inline.svg';
import LinkedSvg from './linkedin.inline.svg';
import TwitterSvg from './twitter.inline.svg';
import YoutubeSvg from './youtube.inline.svg';

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
    <Flex sx={{ alignItems: 'center' }}>
      {facebook && (
        <Link sx={iconBoxStyle} href={facebook} target="_blank">
          <FacebookSvg />
        </Link>
      )}
      {instagram && (
        <Link sx={iconBoxStyle} href={instagram} target="_blank">
          <InstaSvg />
        </Link>
      )}
      {twitter && (
        <Link sx={iconBoxStyle} href={twitter} target="_blank">
          <TwitterSvg />
        </Link>
      )}
      {youtube && (
        <Link sx={iconBoxStyle} href={youtube} target="_blank">
          <YoutubeSvg />
        </Link>
      )}
      {linkedin && (
        <Link sx={iconBoxStyle} href={linkedin} target="_blank">
          <LinkedSvg />
        </Link>
      )}
      {github && (
        <Link sx={iconBoxStyle} href={github} target="_blank">
          <GithubSvg />
        </Link>
      )}
      <Box sx={{ flex: 1 }} />
      <Box>
        <CreatedBy />
      </Box>
    </Flex>
  </Box>
);

const iconBoxStyle = {
  width: 30,
  height: 30,
  display: 'block',
  marginRight: 10,
  '& svg path': {
    fill: 'black',
  },
};

export default Contacts;
