import React, { Component } from 'react';
import Layout from '../components/Layout';
import styles from '../components/blog.module.css';

export default class blog extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.blog}>
          <h1 className={styles.title}>This is our Blog page</h1>
          <h2>This is a second heading</h2>
        </div>
      </Layout>
    );
  }
}
