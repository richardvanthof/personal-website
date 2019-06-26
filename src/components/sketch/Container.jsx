import React from 'react';
import styled from 'styled-component';

const Container = styled.section`
    margin: 0 4%;

    @media #{$mq-medium} {
    margin: 0 8%;
    }

    @media #{$mq-large} {
    margin: 0 12%;
    }

    @media #{$mq-xlarge} {
    margin: 0 18%;
    }
`

export default Container;