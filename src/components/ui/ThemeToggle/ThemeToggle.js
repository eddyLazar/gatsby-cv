/** @jsx jsx */
import { jsx, Link, Text } from 'theme-ui';
import lunaSrc from './luna.svg';

const ThemeToggle = ({ onClick = () => {} }) => {
  return (
    <Link
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        zIndex: 1,
        backgroundColor: 'none',
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
    </Link>
  );
};

export default ThemeToggle;
