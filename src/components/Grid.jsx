import React from 'react';
import styled, { css } from 'styled-components';

import theme from '../styles/theme';
const breakpoint = theme.mediaQueries;
const padding = theme.container;

const tempCols = '1fr 1fr 1fr 1fr 1fr 1fr';
const tempRows = '1fr';

const GridBase = styled.section`
    display: grid;
    grid-template: 5vw ${tempRows} / ${padding.sm} ${tempCols} ${padding.sm};
        @media ${breakpoint.md} {
            grid-template: 7vw ${tempRows} / ${padding.md} ${tempCols} ${padding.md};
        }
        @media ${breakpoint.lg} {
            grid-template: 10vw ${tempRows} / ${padding.lg} ${tempCols} ${padding.lg};
        }
        @media ${breakpoint.xl} {
            grid-template: 10vw ${tempRows} / ${padding.lg} ${tempCols} ${padding.lg};
    }
`

const ColBase = styled.div`
    grid-row: ${props => props.gridRow};
    grid-column: ${props => props.gridCol};
`

const Grid = (props) =>{
    const rows = props.rows;
    const cols = props.col;
    console.log({rows, cols});
    return (
        <GridBase rows={rows} cols={cols}>
            {props.children}
        </GridBase>
    )
}



const Col = styled.div`
    grid-row: ${props => props.row};
    grid-column: ${props => props.col};
    z-index: ${props => props.layer};
`


export {Grid, Col};