/** @jsx jsx */
import { Flex, jsx, Text } from 'theme-ui';
import lunaSrc from './luna.svg';

const ThemeToggle = ({ onClick = () => {} }) => {
  return (
    <Flex sx={{ alignItems: 'center', cursor: 'pointer' }} onClick={onClick}>
      <img src={lunaSrc} alt="" />
      <Text
        color="#fff"
        sx={{
          textTransform: 'uppercase',
          fontSize: '12px',
          lineHeight: '12px',
          marginLeft: 1,
          marginTop: '2px',
        }}
      >
        night mode
      </Text>
    </Flex>
  );
};

export default ThemeToggle;
