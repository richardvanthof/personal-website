

const theme = {}

theme.breakpoints = {
    xs: '48em',
    sm: '64em',
    md: '85.375em',
    lg: '120em',
    xl: '160em',
    xxl: '192dpi',
};

theme.mediaQueries = {
    xs: `(min-width: ${theme.breakpoints.xs})`,
    sm: `(min-width: ${theme.breakpoints.sm})`,
    md: `(min-width: ${theme.breakpoints.md})`,
    lg: `(min-width: ${theme.breakpoints.lg})`,
    xl: `(min-width: ${theme.breakpoints.xl})`,
    // xxl: "(-webkit-min-device-pixel-ratio: 2), (min-resolution: 200dpi)",
    xxl: "(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)",
};

theme.container = {
    sm: '4%',
    md: '8%',
    lg: '12%',
    xl: '18%',
}

theme.typography = {
    base: {
        size: '1em',
        lineHeight: '1em',
        font: ["Times", "avenir", "sans-serif"],
        },
    heading: {
        lineHeight: '1.11em',
        font:[
            "Karla",
            "Avenir Next",
            "Helvetica Neue",
            "Segoe UI",
            "Helvetica",
            "Arial",
            "sans-serif",
        ],
    }
}


export default theme;