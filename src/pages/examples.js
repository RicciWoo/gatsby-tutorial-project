import React from 'react';
import Layout from '../components/Layout';
import HeaderHook from '../examples/Header-Hooks';
import HeaderStatic from '../examples/Header-Static';
import { graphql } from 'gatsby';

const examples = props => {
  const { name, age } = props.data.site.siteMetadata.person;

  return (
    <Layout>
      <h1>This is the examples page</h1>
      <HeaderHook />
      <HeaderStatic />
      <h2>page query</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </Layout>
  );
};

export const getData = graphql`
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

export default examples;
