import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import theme from '../styles/theme';
import Button from './button';
import {Small, Big} from '../components/typography';

const { colors, container, mediaQueries } = theme;

const arrowRight = require('../static/icons/UI/arrow_right.svg')

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
  max-height: 65vh;
  overflow: hidden;
  margin: 0;
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
  margin: 1em 0;
  justify-content: center;
  align: center;
  transition: 0.15s ease-in-out;
  .thumbnail-image {
    transition: 0.15s ease-in-out;
  }
  .information-container {
    * {
       transition: 0.15s ease-in-out;
    }
  }
  .arrow-icon {
    transition: 0.15s ease-in-out;
  }
  &:hover {
    .thumbnail-image {
      box-shadow: 0 0 4em 0 rgba(0, 0, 0, 0.1);
    }
    .information-container {
      * {
        color: ${colors.textDark};
      }
    }
    .arrow-icon {
      transform: translateX(0);
    }
  }
`;

const SmallThumbnailInfo = styled.div`
  padding: 1em;
  display: flex;
  justify-content: space-between;
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

`;

const Metadata = styled.div`
  display: flex;
  font-size: 66%;
`;

const CallToActionIcon = styled.img`
  width: 1.33em;
  transform: translateX(-0.33em);
`;

const Thumbnail = ({
  title, client, img, alt, medium, year, description, type, url, to, right, small,
}) => {
  if (small) {
    return (
      <>
        <SmallThumbnailBase to={to}>
          <SmallThumbnailImage className="thumbnail-image" right={right}>
            <SmallThumbnailImageContent fluid={img} alt={alt || title} />
          </SmallThumbnailImage>
          <SmallThumbnailInfo className="information" right={right}>
            <div className="information-container">
              <p className='light no-margin'>{title}</p>
              <Metadata>
              {client && (<p className='light'>{client }&nbsp;&middot;&nbsp;</p>)}{type && (<p className='light'>{type}</p>)}{year && (<p className='light'>{type}</p>)}
              </Metadata>
            </div>
            <CallToActionIcon className="arrow-icon" src={arrowRight} alt=">"/>
          </SmallThumbnailInfo>
        </SmallThumbnailBase>
      </>
    );
  }
  return (
    <ThumbnailBase to={to}>
      <ThumbnailImage right={right}>
        <Img fluid={img} alt={alt || title} />
      </ThumbnailImage>
      <ThumbnailInfo className="thumbnailInfo" right={right}>
        <h6>{title}</h6>
        <p>{client} &middot; {medium} &middot; {year} </p>
        <p></p>
        <Button title="learn more" to={url} />
      </ThumbnailInfo>
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
