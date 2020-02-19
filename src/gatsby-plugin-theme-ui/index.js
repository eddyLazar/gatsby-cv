const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96];

const colorPalette = {
  black: '#212121',
  white: '#FFFFFF',
  gray1: '#EBEBEB',
  gray2: '#CDCBC3',
  gray3: '#CCCCCC',
  gray4: '#505050',
};

const theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'Steinbeck, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes,
  fontWeights: {
    body: 400,
    normal: 400,
    bold: 800,
  },
  lineHeights: {
    body: '25px',
    heading: '35px',
  },
  colors: {
    ...colorPalette,
    primary: '#D3D1CA',
    text: colorPalette.black,
    background: colorPalette.white,
    tag: colorPalette.gray1,
    muted: '#C6C3B8',
    modes: {
      dark: {
        text: colorPalette.white,
        background: colorPalette.black,
      },
    },
  },
  text: {
    heading: {
      color: 'text',
      lineHeight: 'heading',
      fontSize: fontSizes[5] + 3,
      textTransform: 'uppercase',
      fontWeight: 'normal',
      padding: 0,
      marginBottom: 24,
    },
    paragraph: {
      marginBottom: 24,
      fontSize: 3,
    },
    tag: {
      color: 'tag',
    },
  },
  layout: {
    main: {
      bg: 'background',
      width: ['100%', '100%', '50%'],
      overflowY: 'scroll',
    },
    skills: {
      background: colorPalette.gray1,
      width: ['100%', '50%', '25%'],
      overflowY: 'scroll',
    },
    experience: {
      background: colorPalette.black,
      width: ['100%', '50%', '25%'],
      overflowY: 'scroll',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    a: {
      color: 'text',
    },
    h1: {
      variant: 'text.heading',
      fontWeight: 'body',
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
};

export default theme;
