import styled from 'styled-components';
import theme from '../styles/theme';
import { fadeIn } from '../animations/ux';

const { mediaQueries, colors } = theme;
// eslint-disable-next-line import/prefer-default-export
const Subtitle = styled.p`
    text-transform: uppercase;
    margin-bottom: 1em;
    margin-left: 0.3em;
    ${fadeIn};
    ${props => props.style};
`;

const Big = styled.span`
    font-size: 133%;
    margin-bottom: 0.33em;
`;

const Small = styled.span`
    font-size: 80%;
    line-height: 0.75em;
`;

const HeroTitle = styled.h2`
    ${fadeIn}
`;

const BgHero = styled.marquee`
    font-size: 133vh;
    color: transparent;
    -webkit-text-stroke: 0.001em ${colors.blue};
    line-height: 0.75em;
    height: auto;
    align-self: center;
    margin: 0;
    padding: 0;
    display: none;
    /* transform: translateX(-0.1em); */
    @media ${mediaQueries.xs}{
        display: block;
    }

`;

export {
  Big, Small, Subtitle, HeroTitle, BgHero,
};
