import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

const { container, mediaQueries } = theme;

const GalleryBase = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.5s ease-in-out;
    @media ${mediaQueries.xs} {
        flex-direction: row;
        flex-basis: ${props => props.width}%;
        flex-wrap: wrap;
        padding: ${props => (props.padded ? '10vh' : '2em')} 0;
        & > * {
            width: ${props => props.width}%;
            padding: 0.5em;
            margin: 0;
        }
    }
    @media ${mediaQueries.md} {
        margin: 0 ${props => (props.fluid ? '0' : container.md)};
        & > * {
            width: ${props => props.width}%;
            margin: 0;
        }

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
