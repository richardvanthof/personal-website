import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
const Subtitle = styled.p`
    text-transform: uppercase;
    margin-bottom: 1em;
`;

const Big = styled.span`
    font-size: 133%;
    margin-bottom: 0.33em;
`;

const Small = styled.span`
    font-size: 80%;
    line-height: 0.75em;
`;

const Hero = styled.h4`
    font-family: serif;
    font-weight: bold;
`;

export { Big, Small, Subtitle, Hero };