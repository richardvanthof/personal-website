import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Small } from '../components/typography';

const CopyrightBase = styled.summary`
  text-align: center;
  margin: 0;
  padding: 1em;
  opacity: 0.35;
`;

const Copyright = () => (
  <StaticQuery
    query={
      graphql`
       query getCopyrightData {
        site {
           siteMetadata {
             author
            }
          }
        }
      `
    }
    render={data => {
      return (
        <CopyrightBase>
            <Small>Copyright {data.site.siteMetadata.author}</Small>
        </CopyrightBase>
      )
    }
    }
  />
);

export default Copyright;
