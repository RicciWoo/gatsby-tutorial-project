import React from 'react';
import Layout from '../components/Layout';
import Tours from '../components/Tours/Tours';
import { graphql } from 'gatsby';

const tours = ({ data }) => {
  return (
    <Layout>
      <h1>This is the Tours page</h1>
      <Tours tours={data.tours.edges} />
    </Layout>
  );
};

export const getTours = graphql`
  query {
    tours: allContentfulTour {
      edges {
        node {
          name
          price
          slug
          country
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default tours;
