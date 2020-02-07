import React from 'react';
import Tour from './Tour';
import styles from '../../css/Tours.module.css';

const Tours = ({ tours }) => {
  return (
    <section className={styles.tours}>
      <h2>Our tours</h2>
      <div className={styles.center}>
        {tours.map(({ node }) => {
          return <Tour key={node.id} tour={node} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
