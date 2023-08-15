import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import Button from './button';
import theme from '../styles/theme';


const { colors, container, mediaQueries } = theme;


const HeaderBase = styled.header`
    display: flex;
    flex-direction: column;
    margin: 0;
    margin-bottom: 1em;
    text-decoration: none;
    color: ${colors.black} !important;
    align-items: center;
    @media ${mediaQueries.xs} {
    display: grid;
    grid-template-columns: ${container.sm} 1fr 1fr 1fr ${container.sm};
    grid-template-rows: auto auto;
    }
    @media ${mediaQueries.md} {
    grid-template-columns: ${container.md} 1fr 1fr 1fr ${container.md};
    }
    @media ${mediaQueries.lg} {
    grid-template-columns: ${container.lg} 1fr 1fr 1fr ${container.lg};
    }
    @media ${mediaQueries.xl} {
    grid-template-columns: ${container.xl} 1fr 1fr 1fr ${container.xl};
    }
 `;

const HeaderFigure = styled.figure`
  background: url('${props => props.src}');
  background-size: cover;
  grid-column: 1/7;
  grid-row: 1;
  width: 100%;
  height: 90vh;
  min-height: 30em;
  background-position: center;
`;


const FluidHeaderFigure = styled(BackgroundImage)`
  background-size: cover;
  grid-column: 1/7;
  grid-row: 1;
  width: 100%;
  height: 90vh;
  min-height: 30em;
  background-position: center;
`;

const HeaderVisual = ({ img, fluid }) => {
  if (fluid) {
    return (
      <FluidHeaderFigure fluid={fluid} />
    );
  }
  return (
    <HeaderFigure src={img} />
  );
};

const HeaderTitleBase = styled.div`
    grid-column: 2;
    grid-row: 2;
    padding: 2em 1em;
`;

const HeaderTitle = ({
  title, client, cta, url,
}) => (
  <HeaderTitleBase>
    {title
      && <h3>{title}</h3>
    }
    {client
      && <p>{client}</p>
    }
    {url
      && <Button external title={cta || 'learn more'} to={url} />
    }

  </HeaderTitleBase>
);

const HeaderDescription = styled.p`
    grid-column: 3/5;
    grid-row: 2;
    padding: 2em 1em;
    @media ${mediaQueries.sm} {
      column-count: 2;
      column-gap: 2em;
    }

`;

const PortfolioHeader = ({
  image, fluid, alt, title, client, description, children, cta, url,
}) => (
  <HeaderBase>
    <HeaderVisual fluid={fluid} img={image} alt={alt} />
    <HeaderTitle title={title} client={client} cta={cta} url={url}>
      {children}
    </HeaderTitle>
    <HeaderDescription>
      {description}
    </HeaderDescription>
  </HeaderBase>
);

PortfolioHeader.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  client: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  cta: PropTypes.string,
  url: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  fluid: PropTypes.object.isRequired,
};

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  cta: PropTypes.string,
  url: PropTypes.string,
};

HeaderVisual.propTypes = {
  img: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  fluid: PropTypes.object.isRequired,
};

PortfolioHeader.defaultProps = {
  client: null,
  description: null,
  children: null,
  cta: null,
  url: null,

};

HeaderTitle.defaultProps = {
  cta: null,
  url: null,
};
export default PortfolioHeader;
