import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const EmbedWrapper = styled.div`
    position: relative;
    height: 0;
    padding-bottom: 20%;
    background: rgba(255,255,255,0.1);
    border: none;
    padding-top: 36%;
    width: 100%;
}
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        animation: 1s fadeIn ease-in-out;
        border: none;
        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    }
`;

const Embed = ({ src, children }) => (
  <EmbedWrapper>
    <iframe title="video" src={src || children} />
  </EmbedWrapper>
);

Embed.propTypes = {
  src: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Embed;
