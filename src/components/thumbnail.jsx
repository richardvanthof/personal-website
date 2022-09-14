import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import theme from '../styles/theme';
import Button from './button';

import ArrowRight from '../static/icons/UI/arrow_right.svg';

const { colors, container, mediaQueries } = theme;

const ThumbnailImage = styled.figure`
  height: 50vh;
  overflow: hidden;
  margin: 0;
  img {
    transition: 0.3s ease-in-out;
    height: auto;
    width: 100%;
    margin: 0;
  }
`;


const SmallThumbnailBase = styled(Link)`
  text-decoration: none;
  transition: 0.15s ease-in-out;
  .thumbnail-image {
    transition: 0.15s ease-in-out;
  }
  .information-container {
    * {
      display: block;
      color: ${colors.textDark};
      line-height: 1.1em;
    }
  }
  .arrow-icon {
    transition: 0.15s ease-in-out;
  }
`;

const SmallThumbnailInfo = styled.div`
  margin-top: 0.33em;
`;

const SmallThumbnailImage = styled(ThumbnailImage)`
  /* height: 100vw;
  @media ${mediaQueries.xs} {
    height:30vw;
  } */
`;

const SmallThumbnailImageContent = styled(Img)`
  height: 100%;
  width: auto;
  object-fit: cover;
`;


const CallToActionIcon = styled(ArrowRight)`
  width: 1.33em;
  transform: translateX(-0.33em);
`;

const Thumbnail = ({
  title, client, img, alt, medium, year, type, url, to, right, small,
}) => {
  const textSubstring = (data, wordCountThreshold) => {
    const getDots = () => ((data.length >= wordCountThreshold) ? '...' : '');
    return `${data.substring(0, wordCountThreshold)}${getDots()}`;
  };
    return (
      <>
        <SmallThumbnailBase to={to}>
          <SmallThumbnailImage className="thumbnail-image" right={right}>
            <SmallThumbnailImageContent fluid={img} alt={alt || title} />
          </SmallThumbnailImage>
          <SmallThumbnailInfo className="information" right={right}>
            <div className="information-container">
              <h5>{title}</h5>
              <small>
                {client && ({client } + " &middot; ")}
                {type}
                {year}
              </small>
            </div>
          </SmallThumbnailInfo>
        </SmallThumbnailBase>
      </>
    );
  };


Thumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  client: PropTypes.string,
  img: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  medium: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  year: PropTypes.string,
  url: PropTypes.string.isRequired,
  right: PropTypes.bool,
  small: PropTypes.bool,
};

Thumbnail.defaultProps = {
  right: false,
  small: false,
  client: null,
  year: null,
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
