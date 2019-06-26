import React from 'react';
import styled from 'styled-components';

import theme from '../styles/theme';
const breakpoint = theme.mediaQueries;
const sizeRef = theme.container;

const ContainerBase = styled.section`
    padding: 0 ${sizeRef.sm};

    @media ${breakpoint.md} {
        padding: 0 ${sizeRef.md};
    }

    @media ${breakpoint.lg} {
        padding: 0 ${sizeRef.lg};
    }

    @media ${breakpoint.xl} {
        padding: 0 ${sizeRef.xl};
    }
`

const Container = (props) =>{
    return (
        <ContainerBase>
            {props.children}
        </ContainerBase>
    )
}
export default Container;