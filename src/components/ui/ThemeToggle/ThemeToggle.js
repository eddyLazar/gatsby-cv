/** @jsx jsx */
import { Button, jsx, Text } from 'theme-ui';
import lunaSrc from './luna.svg';

const ThemeToggle = ({ onClick = () => {} }) => {
  return (
    <Button
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        zIndex: 1,
      }}
      onClick={onClick}
    >
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
    </Button>
  );
};

export default ThemeToggle;
