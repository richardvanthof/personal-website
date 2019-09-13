import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';

const ThumbnailBase = styled.div`
    background: whitesmoke;
    flex-basis: 45%;
    width: 50%;
    margin: 0.5em;
`;

const ThumbnailContent = styled.div`

`;

const Thumbnail = (props) => {
    const {children, title, img, alt} = props;
    return (
        <ThumbnailBase>
            <figure>
                <img src={img} alt={alt || title} />
            </figure>
            <ThumbnailContent>
                    <h6>{title}</h6>
                </ThumbnailContent>
        </ThumbnailBase>
    );
}

export default Thumbnail;