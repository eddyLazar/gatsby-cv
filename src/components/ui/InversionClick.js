// background: white;
import React from 'react';
import { animated, useSpring, useTrail } from 'react-spring';
import { Box, useThemeUI } from 'theme-ui';

const animationTiming = 250;

const InversionClick = ({ children = null }) => {
  const [coords, setCoords] = React.useState();
  const [isBubbleVisible, setIsBubbleVisible] = React.useState(0);

  // const showBubble = () => {
  //   setIsBubbleVisible(true);
  // };
  // const hideBubble = () => {
  //   setIsBubbleVisible(false);
  // };

  const handleMove = e => {
    setCoords([e.pageX, e.pageY]);
  };

  const handleClick = e => {
    // setNumberOfClicks(numberOfClicks + 1);
  };

  console.log(numberOfClicks);

  return (
    <Box
      onMouseMove={handleMove}
      onClick={handleClick}
      sx={{
        height: ['initial', 'initial', '100%'],
        overflow: ['scroll', 'scroll', 'hidden'],
      }}
    >
      {/* {isBubbleVisible && (
        <Buble x={coords[0]} y={coords[1]} onFinish={hideBubble} />
      )} */}
      {coords && (
        <Bubble x={coords[0]} y={coords[1]} numberOfClicks={numberOfClicks} />
      )}
      {children}
    </Box>
  );
};

const Bubble = ({ x, y }) => {
  const { theme } = useThemeUI();

  const trail = useTrail(1, { opacity: 1 });

  // const bubleLength = `${7 * theme.space.x}vw`;
  const bubleLength = 100;
  const props = useSpring({
    config: {
      duration: animationTiming,
    },
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
