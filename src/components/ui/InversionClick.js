// background: white;
import React from 'react';
import { animated, useSpring } from 'react-spring';
import { Box } from 'theme-ui';

const InversionClick = ({ children = null }) => {
  const [coords, setCoords] = React.useState();

  const handleClick = e => {
    // setCoords([e.clientX, e.clientY]);
    setCoords([e.pageX, e.pageY]);
  };
  return (
    <Box
      onClick={handleClick}
      sx={{
        height: ['initial', 'initial', '100%'],
        overflow: ['scroll', 'scroll', 'hidden'],
      }}
    >
      {coords && <Buble x={coords[0]} y={coords[1]} />}
      {children}
    </Box>
  );
};

const bubleLength = 100;

const Buble = ({ x, y }) => {
  const props = useSpring({
    to: async (next, cancel) => {
      await next({ transform: 'scale(1)' });
      await next({ transform: 'scale(0)' });
    },
    from: { transform: 'scale(0)' },
  });
  return (
    <animated.div
      style={{
        width: bubleLength,
        height: bubleLength,
        borderRadius: bubleLength / 2,
        position: 'absolute',
        left: x - bubleLength / 2,
        top: y - bubleLength / 2,
        backgroundColor: 'white',
        zIndex: 9999,
        mixBlendMode: 'difference',
        ...props,
      }}
    />
  );
};

export default InversionClick;
