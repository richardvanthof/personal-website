import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from '../styles/theme';

const breakpoint = theme.mediaQueries;
const sizeRef = theme.container;

const paddingTop = '10vh';

const ContainerBase = styled.section`
  padding: ${paddingTop} ${sizeRef.sm};

  @media ${breakpoint.md} {
    padding: ${paddingTop} ${sizeRef.md};
  }

  @media ${breakpoint.lg} {
    padding: ${paddingTop} ${sizeRef.lg};
  }

  @media ${breakpoint.xl} {
    padding: ${paddingTop} ${sizeRef.xl};
  }
`;

const Container = (props) => {
  const { children } = props;
  return (
    <ContainerBase>{children}</ContainerBase>
  );
};

Container.propTypes = {
  children: PropTypes.node,

};

Container.defaultProps = {
  children: <></>,
};

export default Container;
