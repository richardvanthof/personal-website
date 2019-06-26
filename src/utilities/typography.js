import Typography from "typography"

const typography = new Typography({
    title: "Rich Art One",
    baseLineHeight: 1.666,
    scaleRatio: 5,
    includeNormalize: true,
    headerFontFamily: [
        "Avenir Next",
        "Helvetica Neue",
        "Segoe UI",
        "Helvetica",
        "Arial",
        "sans-serif",
    ],
    bodyFontFamily: ["avenir", "Georgia", "serif"],
    headerGray: 0,
    headerGrayHue: "warm",
    bodyGray: 0,
    bodyGrayHue: "warm",
    headerWeight: 600,
    bodyWeight: 400,
    boldWeight: 700,
    overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
        blockquote: {
          ...adjustFontSizeTo('135%'),
          paddingLeft: rhythm(13/16),
          lineHeight: '1.22em',
          marginLeft: rhythm(-1),
        },
        'blockquote > :last-child': {
          marginBottom: 0,
        },
        'figcaption':{
          fontSize: '0.95rem',
        }
      }),

})
console.log(typography);


export default typography