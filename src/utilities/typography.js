import Typography from 'typography';
import theme from '../styles/theme';

const { base } = theme.typography;
const header = theme.typography.heading;

const typography = new Typography({
  title: 'Rich Art One',
  scaleRatio: 6,
  includeNormalize: true,
  headerFontFamily: header.font,
  bodyFontFamily: base.font,
  headerWeight: 600,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    blockquote: {
      ...adjustFontSizeTo('135%'),
      paddingLeft: rhythm(13 / 16),
      lineHeight: '1.22em',
      marginLeft: rhythm(-1),
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    figcaption: {
      fontSize: '0.95rem',
    },
  }),
});

export default typography;
