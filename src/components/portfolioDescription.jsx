import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../styles/theme';
import Container from './container';

const { mediaQueries } = theme;

const Description = styled.div`
  display: flex;
  column-gap: 10vw;
  flex-direction: column;
  justify-content: space-between;
  margin: 5vh 1em;
  * {
    margin: 0;
    padding: 0;
    display: block;
  }
  @media ${mediaQueries.sm} {
    flex-direction: row;
  }
`;

const Paragraph = styled.div`
  flex-basis: 66%;
`;

const PortfolioDescription = ({
  description, type, year, client, role,
}) => (
  <Container>
    <Description>
      <Paragraph className="big">{description}</Paragraph>
      <div>
        <p>
          <small>
            Role:

            {role}
          </small>
          <small>
Work:
            {type}
          </small>
          <small>
Year:
            {year}
          </small>
          <small>{client || 'Autonimous work'}</small>
        </p>
      </div>
    </Description>
  </Container>
);

PortfolioDescription.propTypes = {
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default PortfolioDescription;
