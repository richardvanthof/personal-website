import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import MinimalLayout from '../layouts/minimalLayout';
import Gallery from '../components/gallery';
import Socials from '../components/socials';
import theme from '../styles/theme';

const { colors, mediaQueries } = theme;


const ContactBase = styled(MinimalLayout)`
  color: ${colors.white} !important;
`;

const MainContactInfo = styled.div`
  height: 100vh;
  max-height: 20em;
  min-height: 5em;
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  @media ${mediaQueries.xs} {
    margin-top: 0;
    height: 63vh;
    max-height: unset;
    min-height: 30em;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5vh 0;
  color: ${colors.white} !important;
  @media ${mediaQueries.sm} {
    flex-direction: row;
    padding: 0;
    div {
      padding-right: 4em;
      width: 33%;
      flex-basis: 33%;
  }
  }
`;

const ContactInfoCluster = styled.ul`
list-style: none;

margin: 1em 0;
  li {
    margin: 0.33em;
  }
`;

const ContactInfoItem = styled.li`
  & > * {
    display: inline;
  }
`;


const Contact = ({ data }) => {
  const {
    email, adress,
  } = data.site.siteMetadata;
  const {
    city, country,
  } = adress;

  return (
    <Gallery>
      <ContactBase>
        <MainContactInfo>
          <h6>Contact me</h6>
          <ContactInfoCluster>
            <ContactInfoItem>
              <h3>{email}</h3>
            </ContactInfoItem>
          </ContactInfoCluster>

          <ContactInfoCluster>

            <li>
              <h5>

                {city}
              </h5>
            </li>
            <li><h5>{country}</h5></li>
          </ContactInfoCluster>
        </MainContactInfo>
        <ContactDetails>
          <div>
            <h6>Follow me!</h6>
            <Socials />
          </div>

        </ContactDetails>
      </ContactBase>
    </Gallery>
  );
};

export const pageQuery = graphql`
  query MyQuery {
    site {
      siteMetadata {
        author
        email
        repo
        pgp
        adress {
          city
          country
        }
      }
    }
  }
`;

Contact.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        email: PropTypes.string,
        repo: PropTypes.string,
        pgp: PropTypes.string,
        adress: PropTypes.shape({
          city: PropTypes.string,
          country: PropTypes.string,
          street: PropTypes.string,
          number: PropTypes.number,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Contact;
