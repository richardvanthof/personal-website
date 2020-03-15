import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Button from './button';
import theme from '../styles/theme';

const { colors } = theme;

const CallToActionSection = styled.section`
  min-height: 40vh;
  width: 100%;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const CTASectionContent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50vw;
  background: ${colors.bgContent};
  span {
    padding: 2em;
  }
  & > * {
    width: 100%
  }
`;

const CTASection = ({
  title, description, button, to, img,
}) => (
  <CallToActionSection>
    <CTASectionContent>
      <span>
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
        {title && <Button title={button} to={to} />}
      </span>
      {img && <Img fluid={img} />}
    </CTASectionContent>
  </CallToActionSection>
);

CTASection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.string,
  to: PropTypes.string,
  img: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

CTASection.defaultProps = {
  title: null,
  description: null,
  button: null,
  to: '#',
  img: null,
};

export default CTASection;
