/** @jsx jsx */
import { jsx } from 'theme-ui';

const Tag = ({ children }) => {
  return (
    <div
      sx={{
        color: 'tag',
        borderRadius: '15px',
        backgroundColor: 'black',
        display: 'inline-block',
        padding: '5px 17px',
        marginRight: '6px',
        marginBottom: '10px',
      }}
    >
      {children}
    </div>
  );
};

export default Tag;
