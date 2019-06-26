

const theme = {}

theme.breakpoints = {
    xs: '48em',
    sm: '64em',
    md: '85.375em',
    lg: '120em',
    xl: '160em',
};

theme.mediaQueries = {
        xs: `(min-width: ${theme.breakpoints.xs})`,
        sm: `(min-width: ${theme.breakpoints.sm})`,
        md: `(min-width: ${theme.breakpoints.md})`,
        lg: `(min-width: ${theme.breakpoints.lg})`,
        xl: `(min-width: ${theme.breakpoints.xl})`,
        xxl: "(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)",
};

theme.typography = {
    base: {
        size: '1em',
        lineHeight: '1.66em',
        },
    heading: {
        lineHeight: '1.22em',
    }
}


export default theme;