// background: white;
import React from 'react';
import { animated, useSpring } from 'react-spring';

const InversionClick = ({ children = null }) => {
  const [coords, setCoords] = React.useState();

  const handleClick = e => {
    // console.log(e);
    // console.log(e.pageX);

    setCoords([e.clientX, e.clientY]);
  };
  return (
    <div
      onClick={handleClick}
      style={{ height: '100%', maxHeight: '100%', overflow: 'hidden' }}
    >
      {coords && <Buble x={coords[0]} y={coords[1]} />}
      {children}
    </div>
  );
};

const bubleLength = 100;

const square = x => ({ width: x, height: x });

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
// mix-blend-mode: difference;
