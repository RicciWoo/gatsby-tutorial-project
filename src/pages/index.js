import React from 'react';
import Layout from '../components/Layout';
import { Button } from '../components/Button';

export default () => (
  <Layout>
    <h1 className="title">This is our Home page</h1>
    <h1 className="title">This is another title</h1>
    Hello world!
    <h2>This is a second heading</h2>
    <Button>Styled Button</Button>
  </Layout>
);
