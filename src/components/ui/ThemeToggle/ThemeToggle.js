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
        className="theme-toggle-text"
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
      <div className="link-for-pdf">
        <span>better look at it from here</span>
        <a href="https://eddylazar.com/">eddylazar.com</a>
      </div>
    </Link>
  );
};

export default ThemeToggle;
