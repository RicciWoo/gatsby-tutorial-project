import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

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
  const {
    site: { siteMetadata: info },
  } = useStaticQuery(getData);

  return (
    <div>
      <h2>useStaticQuery Hook</h2>
      <p>Title: {info.siteTitle}</p>
      <p>Author: {info.author}</p>
    </div>
  );
};

export default Header;
