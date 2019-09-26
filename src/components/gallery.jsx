import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

const { container, mediaQueries } = theme;

const GalleryBase = styled.section`
    margin: 1em ${props => (props.fluid ? '2em' : container.sm)};
    display: flex;
    flex-direction: column;
    @media ${mediaQueries.sm} {
        flex-direction: row;
        flex-wrap: wrap;
        padding: ${props => (props.padded ? '10vh' : '1em')} 0;
    }
    @media ${mediaQueries.md} {
        margin: 1em ${props => (props.fluid ? '2em' : container.md)};
        flex-basis: ${props => props.width}%;
        & > * {
            width: ${props => props.width}%;
            padding: 0.5em;
            margin: 0;
        }
    }
    @media ${mediaQueries.lg} {
        margin: 1em ${props => (props.fluid ? '2em' : container.lg)};
    }
`;

const Gallery = ({
  children, fluid, width, padded,
}) => (
  <GalleryBase width={width} padded={padded} fluid={fluid}>
    {children}
  </GalleryBase>
);

Gallery.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
  width: PropTypes.number,
  padded: PropTypes.bool,
};

Gallery.defaultProps = {
  width: 100,
  fluid: false,
  padded: false,
};

export default Gallery;
