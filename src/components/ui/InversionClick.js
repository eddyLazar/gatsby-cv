// background: white;
import React from 'react';
import { Box, useThemeUI } from 'theme-ui';

const InversionClick = ({ children = null }) => {
  const [coords, setCoords] = React.useState();
  const [isBubbleVisible, setIsBubbleVisible] = React.useState(false);
  const [isOverText, setIsOverText] = React.useState(false);

  const showBubble = e => {
    setIsBubbleVisible(true);
  };
  const hideBubble = () => setIsBubbleVisible(false);

  const handleMove = e => {
    setCoords([e.pageX, e.pageY]);
  };

  return (
    <Box
      onMouseOver={e => {
        if (
          e.target.localName === 'p' ||
          e.target.parentElement.localName === 'p'
        ) {
          return setIsOverText(true);
        }
        if (
          e.target.localName === 'a' ||
          e.target.parentElement.localName === 'a'
        ) {
          return setIsOverText(true);
        }
        if (
          e.target.localName === 'button' ||
          e.target.parentElement.localName === 'button'
        ) {
          return setIsOverText(true);
        }
        if (
          e.target.localName === 'h1' ||
          e.target.parentElement.localName === 'h1'
        ) {
          return setIsOverText(true);
        }
        if (
          e.target.localName === 'h2' ||
          e.target.parentElement.localName === 'h2'
        ) {
          return setIsOverText(true);
        }
        return setIsOverText(false);
      }}
      onMouseMove={handleMove}
      onMouseDown={showBubble}
      onMouseUp={hideBubble}
      sx={{
        height: ['initial', 'initial', '100%'],
        overflow: ['scroll', 'scroll', 'hidden'],
      }}
    >
      {coords && !isOverText && isBubbleVisible && (
        <Bubble x={coords[0]} y={coords[1]} />
      )}
      {children}
    </Box>
  );
};

const Bubble = ({ x, y, isVisible = false }) => {
  const { theme } = useThemeUI();

  const bubleLength = 7 * theme.space.x;

  return (
    <Box
      sx={{
        display: ['none', 'none', 'block', 'block'],
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
