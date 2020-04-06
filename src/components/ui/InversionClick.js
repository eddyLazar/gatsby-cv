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
          isTagFunctional(e.target.localName) ||
          isTagFunctional(e.target.parentElement.localName)
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

const Bubble = ({ x, y }) => {
  const { theme, colorMode } = useThemeUI();

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
        backgroundColor: colorMode === 'dark' ? 'black' : 'white',
        zIndex: 9999,
        mixBlendMode: 'difference',
      }}
    />
  );
};

export default InversionClick;

const isTagFunctional = tagLocalename => {
  const functionalTags = [
    'p',
    'a',
    'button',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
  ];
  return functionalTags.includes(tagLocalename);
};
