import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import theme from '../styles/theme';
import Button from './button';

const { colors, container, mediaQueries } = theme;

const ThumbnailBase = styled(Link)`
    display: flex;
    flex-direction: column;
    margin: 1em 0;
    text-decoration: none;
    color: ${colors.black} !important;

    @media ${mediaQueries.xs} {
      display: grid;
      grid-template-columns: ${container.sm} 1fr 1fr 1fr 1fr ${container.sm};
      grid-template-rows: auto;
      margin: 1em 0;
    }
    @media ${mediaQueries.md} {
      margin-bottom: 10vh;
      grid-template-columns: ${container.md} 1fr 1fr 1fr 1fr ${container.md};
    }
`;

const ThumbnailImage = styled.figure`
  grid-column: ${props => (props.right ? '3/6' : '2/5')};
  max-height: 90vh;
  overflow: hidden;
  margin: 0;
  &:hover {
    img {
      transform: scale(1.03);
    }
  }
  img {
    transition: 0.3s ease-in-out;
    height: auto;
    width: 100%;
    margin: 0;
  }
`;

const ThumbnailInfo = styled.div`
  grid-column: ${props => (props.right ? 2 : 5)};
  grid-row: 1;
  margin: 3em;
`;

const ThumbnailMetaData = styled.div`
  display: none;
  @media ${mediaQueries.sm} {
    grid-column: ${props => (props.right ? 6 : 1)};
    grid-row: 1;
    text-align: right;
    margin: 1em;
    display: flex;
    flex-direction: column;
  }
`;

const Type = styled.p`
  writing-mode: tb-rl;
  text-orientation: sideways-right;
`;

const Thumbnail = (props) => {
  const {
    title,
    client,
    img,
    alt,
    medium,
    year,
    description,
    url,
    right,
  } = props;
  return (
    <ThumbnailBase to={url}>
      <ThumbnailImage right={right}>
        <img src={img} alt={alt || title} />
      </ThumbnailImage>
      <ThumbnailInfo right={right}>
        <h3>{title}</h3>
        <p>{client}</p>
        <p>{description}</p>
        <Button title="learn more" to={url} />
      </ThumbnailInfo>
      <ThumbnailMetaData right={right}>
        <Type>{medium}</Type>
        <h6>{year}</h6>
      </ThumbnailMetaData>
    </ThumbnailBase>
  );
};

Thumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  medium: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  right: PropTypes.bool,
};

Thumbnail.defaultProps = {
  right: false,
};
export default Thumbnail;
