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
      margin: 10vh 0;
    }
    @media ${mediaQueries.md} {
      margin-bottom: 15vh;
      grid-template-columns: ${container.md} 1fr 1fr 1fr 1fr ${container.md};
    }
`;

const ThumbnailImage = styled.figure`
  grid-column: ${props => (props.right ? '3/6' : '2/5')};
  max-height: 90vh;
  overflow: hidden;
  margin: 0;
  border-radius: 1em;
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
    transform: translateX(${props => (props.right ? '-0.5em' : '0.5em')});
    justify-content: space-between;
    grid-column: ${props => (props.right ? 6 : 1)};
    grid-row: 1;
    text-align: right;
    margin: 1em;
    display: flex;
    flex-direction: column;
    align-items: ${props => (props.right ? 'baseline' : 'end')};
  }
`;

const Type = styled.p`
  writing-mode: tb-rl;
  text-orientation: sideways-right;
`;

const Year = styled.h6`
  transform: translateX(${props => (props.right ? '-0.75em' : '0.66em')});
`;

const SmallThumbnailBase = styled(Link)`
  padding: 2em;
  padding-bottom: 5vh;
  display: flex;
  flex-direction: column;
`;

const SmallThumbnailInfo = styled.div`
  grid-column: ${props => (props.right ? 2 : 5)};
  grid-row: 1;
  margin: 1em 2em;
`;

const Thumbnail = ({
  title, client, img, alt, medium, year, description, url, right, small,
}) => {
  if (small) {
    return (
      <SmallThumbnailBase to={url}>
        <ThumbnailImage right={right}>
          <img src={img} alt={alt || title} />
        </ThumbnailImage>
        <SmallThumbnailInfo right={right}>
          <h5>{title}</h5>
          {client && (
            <p>{client}</p>
          )}
          <Button title="learn more" to={url} />
        </SmallThumbnailInfo>
        {/* <ThumbnailMetaData right={right}>
          <Type>{medium}</Type>
          <Year right={right}>{year}</Year>
        </ThumbnailMetaData> */}
      </SmallThumbnailBase>
    );
  }
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
        <Year right={right}>{year}</Year>
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
  small: PropTypes.bool,
};

Thumbnail.defaultProps = {
  right: false,
  small: false,
};
export default Thumbnail;
