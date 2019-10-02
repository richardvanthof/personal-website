import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import theme from '../styles/theme';

const breakpoint = theme.mediaQueries;
const padding = theme.container;

const tempRows = 'auto';

const GridBase = styled.section`
  display: flex;
  grid-template: 5vw ${tempRows} / ${padding.sm} ${props => props.cols.mobile} ${padding.sm};

  @media ${breakpoint.xs} {
    display: grid;
    grid-template: 5vw ${tempRows} / ${padding.sm} ${props => props.cols.desktop} ${padding.sm};
  }
  @media ${breakpoint.sm} {
    grid-template: 5vw ${tempRows} / ${padding.sm} ${props => props.cols.desktop} ${padding.sm};
  }
  @media ${breakpoint.md} {
    grid-template: 7vw ${tempRows} / ${padding.md} ${props => props.cols.desktop} ${padding.md};
  }
  @media ${breakpoint.lg} {
    grid-template: 10vw ${tempRows} / ${padding.lg} ${props => props.cols.desktop} ${padding.lg};
  }
  @media ${breakpoint.xl} {
    grid-template: 10vw ${tempRows} / ${padding.xl} ${props => props.cols.desktop} ${padding.xl};
  }
`;

const Grid = (props) => {
  const { rows, cols, children } = props;

  return (
    <GridBase rows={rows} cols={cols}>
      {children}
    </GridBase>
  );
};

const ColBase = styled.div`
  /*eslint-disable*/
  grid-row: ${props => props.row.sm || '2'};
  grid-column: ${props => props.col.sm || '2/6'};
  z-index: ${props => props.layer} ${breakpoint.sm} {
    grid-row: ${props => props.row.md || '2'};
    grid-column: ${props => props.col.md || '2/14'};
  }
  @media ${breakpoint.md} {
    grid-row: ${props => props.row.md || 'inherit'};
    grid-column: ${props => props.col.md || 'inherit'};
  }
  @media ${breakpoint.lg} {
    grid-row: ${props => props.row.lg || 'inherit'};
    grid-column: ${props => props.col.lg || 'inherit'};
  }
  @media ${breakpoint.xl} {
    grid-row: ${props => props.row.xl || 'inherit'};
    grid-column: ${props => props.col.xl || 'inherit'};
  }
  /*eslint-enable*/
`;

const Col = (props) => {
  const {
    row, col, layer, children,
  } = props;

  return (
    <ColBase row={row} col={col} layer={layer}>
      {children}
    </ColBase>
  );
};

Grid.propTypes = {
  rows: PropTypes.string,
  cols: PropTypes.string,
  children: PropTypes.node,
};

Col.propTypes = {
  row: PropTypes.shape({
    xs: PropTypes.string,
    sm: PropTypes.string,
    md: PropTypes.string,
    lg: PropTypes.string,
    xl: PropTypes.string,
  }),
  col: PropTypes.shape({
    xs: PropTypes.string,
    sm: PropTypes.string,
    md: PropTypes.string,
    lg: PropTypes.string,
    xl: PropTypes.string,
  }),
  layer: PropTypes.number,
  children: PropTypes.node,
};

Grid.defaultProps = {
  rows: 'auto auto',
  cols: '1fr 1fr 1fr 1fr 1fr 1fr',
  children: <></>,
};

Col.defaultProps = {
  row: PropTypes.shape({
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: '',
  }),
  col: PropTypes.shape({
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: '',
  }),
  layer: 0,
  children: <></>,
};


export { Grid, Col };
