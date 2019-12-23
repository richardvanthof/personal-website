import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Small } from './typography';

const CopyrightBase = styled.summary`
  text-align: center;
  margin: 0;
  padding: 1em;
  opacity: 0.35;
  a {
    text-decoration: none;
  }
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
    render={data => (
      <CopyrightBase>
        <Small>
          <a target="_blanc" href="/humans.txt">
            Copyright

            {data.site.siteMetadata.author}
          </a>
        </Small>
      </CopyrightBase>
    )
    }
  />
);

export default Copyright;
