import Typography from 'typography';

const typography = new Typography({
  title: 'Rich Art One',
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  scaleRatio: 3,
  includeNormalize: true,
  headerFontFamily: [
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['avenir', 'Georgia', 'serif'],
  headerGray: 0,
  headerGrayHue: 'warm',
  bodyGray: 0,
  bodyGrayHue: 'warm',
  headerWeight: 600,
  bodyWeight: 400,
  boldWeight: 700,

});

export default typography;
