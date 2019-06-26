import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    /*Font-Size*/
    /*Line-Height*/
    $base-line-height: 1.5;
    $header-line-height: 1.25;

    body {
    font-size: basefontsize;


    @media (min-width: 64em) {
        font-size: 1em *1.2;

    }

    @media (min-width: 85.375em) {
        font-size: 1em *1.3;
    }

    @media (min-width: 120em) {
        font-size: 1em *1.4;
    }

    @media (min-width: 160em) {
        font-size:  1em *1.6;
    }
    }
`
export default Container;