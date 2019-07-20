import React from "react"
import styled, { css } from "styled-components"

import theme from "../styles/theme"
import { auto } from "eol"
const breakpoint = theme.mediaQueries
const padding = theme.container

const tempRows = "auto"

const defaultGrid = {
  cols: {
    mobile: "1fr 1fr 1fr 1fr 1fr 1fr",
    desktop: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
  },
  rows: {
    sm: "auto",
    md: "auto",
    lg: "auto",
    xl: "auto",
  },
}

const GridBase = styled.section`
  display: grid;
  grid-template: 5vw ${tempRows} / ${padding.sm} ${props => props.cols.mobile} ${padding.sm};

  @media ${breakpoint.xs} {
    grid-template: 5vw ${tempRows} / ${padding.sm} ${props =>
        props.cols.desktop} ${padding.sm};
  }
  @media ${breakpoint.sm} {
    grid-template: 5vw ${tempRows} / ${padding.sm} ${props =>
        props.cols.desktop} ${padding.sm};
  }
  @media ${breakpoint.md} {
    grid-template: 7vw ${tempRows} / ${padding.md} ${props =>
        props.cols.desktop} ${padding.md};
  }
  @media ${breakpoint.lg} {
    grid-template: 10vw ${tempRows} / ${padding.lg} ${props =>
        props.cols.desktop} ${padding.lg};
  }
  @media ${breakpoint.xl} {
    grid-template: 10vw ${tempRows} / ${padding.xl} ${props =>
        props.cols.desktop} ${padding.xl};
  }
`

const Grid = props => {
  // const rows = ((props.rows !== null) ? props.rows : defaultGrid.rows);
  // const cols = ((props.col !== null) ? props.rows : defaultGrid.cols);
  const rows = props.rows
  const cols = props.cols
  console.log({ rows, cols })
  return (
    <GridBase rows={rows} cols={cols}>
      {props.children}
    </GridBase>
  )
}

const ColBase = styled.div`
  grid-row: ${props => props.row.sm || "2"};
  grid-column: ${props => props.col.sm || "2/6"};
  z-index: ${props => props.layer} @media ${breakpoint.sm} {
    grid-row: ${props => props.row.md || "2"};
    grid-column: ${props => props.col.md || "2/14"};
  }
  @media ${breakpoint.md} {
    grid-row: ${props => props.row.md || "inherit"};
    grid-column: ${props => props.col.md || "inherit"};
  }
  @media ${breakpoint.lg} {
    grid-row: ${props => props.row.lg || "inherit"};
    grid-column: ${props => props.col.lg || "inherit"};
  }
  @media ${breakpoint.xl} {
    grid-row: ${props => props.row.xl || "inherit"};
    grid-column: ${props => props.col.xl || "inherit"};
  }
`

const Col = props => {
  const row = props.row
  const col = props.col
  const layer = props.layer
  // console.debug({row, col}); right variables detected!
  return (
    <ColBase row={row} col={col} layer={layer}>
      {props.children}
    </ColBase>
  )
}

export { Grid, Col }
