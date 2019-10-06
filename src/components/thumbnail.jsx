import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
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
      margin-bottom: 25vh;
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
    display: flex;
    transform: translateX(${props => (props.right ? '-0.5em' : '0.5em')});
    justify-content: space-between;
    grid-column: ${props => (props.right ? 6 : 1)};
    grid-row: 1;
    text-align: right;
    margin: 1em;
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
  text-decoration: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  @media ${mediaQueries.xs} {
    min-height: unset;
    width:
  }
`;

const SmallThumbnailInfo = styled.div`
  margin: 1em;
  @media ${mediaQueries.md} {
    margin: 1em
  };
`;

const SmallThumbnailImage = styled(ThumbnailImage)`
  height: 100vw;
  @media ${mediaQueries.xs} {
    height:30vw;
  }

`;

const SmallThumbnailImageContent = styled(Img)`
  height: 100%;
  width: auto;
`;

const Thumbnail = ({
  title, client, img, alt, medium, year, description, type, url, to, right, small,
}) => {
  if (small) {
    return (
      <SmallThumbnailBase to={to}>
        <SmallThumbnailImage right={right}>
          <SmallThumbnailImageContent fluid={img} alt={alt || title} />
        </SmallThumbnailImage>
        <SmallThumbnailInfo right={right}>
          <h5>{title}</h5>
          {client && (
            <p>{client}</p>
          )}
          {type && (
            <p>{type}</p>
          )}
          <Button title="learn more" to={to} />
        </SmallThumbnailInfo>
        {/* <ThumbnailMetaData right={right}>
          <Type>{medium}</Type>
          <Year right={right}>{year}</Year>
        </ThumbnailMetaData> */}
      </SmallThumbnailBase>
    );
  }
  return (
    <ThumbnailBase to={to}>
      <ThumbnailImage right={right}>
        <Img fluid={img} alt={alt || title} />
      </ThumbnailImage>
      <ThumbnailInfo right={right}>
        <h6>{title}</h6>
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
  to: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  medium: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
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

export const Blogpost = ({
  right, small, data: post,
}, key) => (
  <Thumbnail
    key={key}
    title={post.frontmatter.title}
    img={post.frontmatter.image.childImageSharp.fluid}
    url={post.frontmatter.url}
    client={post.frontmatter.client}
    type={post.frontmatter.type}
    right={right}
    small={small}
    to={post.fields.slug}
  />
);

Blogpost.propTypes = {
  right: PropTypes.bool,
  small: PropTypes.bool,
  data: PropTypes.shape({
    fileAbsolutePath: PropTypes.string,
    frontmatter: PropTypes.object,
  }).isRequired,
};

Blogpost.defaultProps = {
  right: false,
  small: false,
};
export default Thumbnail;
