import { invert } from 'polished';

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96];
fontSizes.small = '0.972vw'; // min: 12
fontSizes.medium = '1.388vw'; // min: 17
fontSizes.large = '2.4vw'; // min: 29

const colorPalette = {
  black: '#212121',
  white: '#FFFFFF',
  // gray1: '#EBEBEB',
  gray1: '#E6E6E6',
  gray2: '#CDCBC3',
  gray3: '#CCCCCC',
  gray4: '#505050',
};

const colors = {
  ...colorPalette,
  primary: '#D3D1CA',
  text: colorPalette.black,
  background: colorPalette.white,
  tag: colorPalette.gray1,
  muted: '#C6C3B8',
};

const darkColors = {};

for (const [key, value] of Object.entries(colors)) {
  darkColors[key] = invert(value);
}

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
space.small = '0.6944vw'; // 10
space.medium = '2.0833vw'; // 30
space.large = '4.166vw'; // 60
space.x = 2.0833;

const lineHeight = {
  small: '1.388vw', // min 17
  medium: '1.7361vw', // min 21.25
  large: '2.43vw', // min 29
};

const theme = {
  breakpoints: ['40em', '52em', '64em', '76.875em'],
  space,
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
    body: '1.7361vw',
    heading: '2.43vw',
  },
  colors: {
    ...colors,
    modes: {
      dark: { ...darkColors, black: '#fff' },
    },
  },
  text: {
    heading: {
      color: 'text',
      lineHeight: ['29px', '29px', '29px', lineHeight.large],
      fontSize: ['29px', '29px', '29px', 'large'],
      textTransform: 'uppercase',
      fontWeight: 'normal',
      padding: 0,
      marginBottom: 'large',
    },
    paragraph: {
      marginBottom: 'medium',
      fontSize: ['12px', '12px', '12px', 'small'],
      lineHeight: ['17px', '17px', '17px', lineHeight.small],
    },
    lead: {
      marginBottom: 'medium',
      fontSize: ['18px', '18px', '18px', 'medium'],
      lineHeight: ['21.25px', '21.25px', '21.25px', lineHeight.medium],
    },
  },
  layout: {
    main: {
      bg: 'background',
      width: ['100%', '100%', '50%'],
      overflowY: 'scroll',
    },
    skills: {
      bg: 'gray1',
      width: ['100%', '100%', '25%'],
      overflowY: 'scroll',
    },
    experience: {
      bg: 'black',
      width: ['100%', '100%', '25%'],
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
      color: 'inherit!important',
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
    p: {
      fontSize: 'small',
      marginBottom: 'medium',
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
