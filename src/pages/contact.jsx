import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Button from '../components/button';
import MinimalLayout from '../layouts/minimalLayout';
import Gallery from '../components/gallery';
import Socials from '../components/socials';
import theme from '../styles/theme';

<<<<<<< HEAD
import DefaultLayout from '../layouts/defaultLayout';
import Container from '../components/container';
import Header from '../components/header';

const Contact = () => (
  <DefaultLayout>
    <Header>
      <h1>Contact</h1>
    </Header>
  </DefaultLayout>
=======
import Map from '../static/icons/content/map.svg';
import Lock from '../static/icons/UI/lock.svg';

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
  color: ${colors.white} !important;
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

const LockIcon = styled(Lock)`
  width: 1em;
`;

const LockMessage = styled.a`
  text-decoration: none;
  color: ${colors.black};
  padding: 0.3em 0.99em;
  margin: 0.5em;
  border-radius: 5rem;
  transition: 0.2s ease-in-out;
  &:after {
    content: 'Download PGP Key';
    padding: 0.5em;
    transition: 0.1s ease-in-out;
    opacity: 0;
  }
  &:hover {
    background: ${colors.yellow};
    &:after {
      opacity: 1;
    }
  }
  @media ${mediaQueries.xs} {
  }
`;

const PGP = ({ permalink }) => (
  <LockMessage href={permalink}>
    <LockIcon />
  </LockMessage>
>>>>>>> feature/cms
);

const ContactInfoItem = styled.li`
  & > * {
    display: inline;
  }
`;

const HeaderImage = styled(Map)`
  position: absolute;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  min-height: 25em;
  background: ${colors.lightblue};
  @media ${mediaQueries.xs} {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`;

const Contact = ({ data }) => {
  const {
    email, repo, phone, pgp, adress,
  } = data.site.siteMetadata;
  const {
    street, number, zipCode, city, country,
  } = adress;


  const generateDirectionsUrl = (location) => {
    const url = 'https://www.google.com/maps/search/?api=1&query=';
    const query = encodeURIComponent(location);
    return url + query;
  };

  const directions = generateDirectionsUrl(`${street} ${number}`);

  return (
    <Gallery>
      <ContactBase>
        <HeaderImage />
        <MainContactInfo>
          <h6>Contact me</h6>
          <ContactInfoCluster>
            <ContactInfoItem>
              <h3>{email}</h3>
              <PGP permalink={pgp} />
            </ContactInfoItem>
            <ContactInfoItem><h3>{phone}</h3></ContactInfoItem>
          </ContactInfoCluster>

          <ContactInfoCluster>
            <li>
              <h5>
                {street}

                {number}
              </h5>
            </li>
            <li>
              <h5>
                {zipCode}
,

                {city}
              </h5>
            </li>
            <li><h5>{country}</h5></li>
          </ContactInfoCluster>
          <Button external title="Get directions" to={directions} />
        </MainContactInfo>
        <ContactDetails>
          <div>
            <h6>Open Source</h6>
            <p className="light">Good news! This site is open source. Would you like to see how I made it or do you want to build from this site? It’s all possible!</p>
            <Button external title="View source code" to={repo} />
          </div>
          <div>
            <h6>Follow me!</h6>
            <Socials />
          </div>
          <div>
            <h6>Want to print your message in front of Richards face?</h6>
            <Button external title="Try the Richard Hotline!" to="https://richardhotline.nl" />
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
        phone
        pgp
        adress {
          street
          number
          zipCode
          city
          country
        }
      }
    }
  }
`;

export default Contact;
