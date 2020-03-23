// background: white;
import React from 'react';
import { Box, useThemeUI } from 'theme-ui';

const InversionClick = ({ children = null }) => {
  const [coords, setCoords] = React.useState();
  const [isBubbleVisible, setIsBubbleVisible] = React.useState(false);

  const showBubble = () => setIsBubbleVisible(true);
  const hideBubble = () => setIsBubbleVisible(false);

  const handleMove = e => {
    setCoords([e.pageX, e.pageY]);
  };

  const animationMs = 1000;

  React.useEffect(() => {
    let timerId = null;

    if (isBubbleVisible) {
      setTimeout(hideBubble, animationMs);
    }
    return () => clearTimeout(timerId);
  }, [isBubbleVisible]);

  return (
    <Box
      onMouseMove={handleMove}
      onClick={showBubble}
      sx={{
        height: ['initial', 'initial', '100%'],
        overflow: ['scroll', 'scroll', 'hidden'],
      }}
    >
      {isBubbleVisible && <Bubble x={coords[0]} y={coords[1]} />}
      {children}
    </Box>
  );
};

const Bubble = ({ x, y, isVisible = false }) => {
  const { theme } = useThemeUI();

  const bubleLength = 7 * theme.space.x;

  return (
    <Box
      style={{
        width: `${bubleLength}vw`,
        height: `${bubleLength}vw`,
        borderRadius: `${bubleLength / 2}vw`,
        position: 'absolute',
        left: `calc(${x}px - ${bubleLength / 2}vw)`,
        top: `calc(${y}px - ${bubleLength / 2}vw)`,
        backgroundColor: 'white',
        zIndex: 9999,
        mixBlendMode: 'difference',
      }}
    />
  );
};

export default InversionClick;
