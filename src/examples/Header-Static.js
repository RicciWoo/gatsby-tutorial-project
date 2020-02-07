import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        description
        author
        person: data {
          name
          age
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <StaticQuery
      query={getData}
      render={data => {
        return (
          <div>
            <h2>StaticQuery component</h2>
            <p>Title: {data.site.siteMetadata.siteTitle}</p>
            <p>Author: {data.site.siteMetadata.author}</p>
          </div>
        );
      }}
    ></StaticQuery>
  );
};

export default Header;
