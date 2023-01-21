import React from 'react';

import ProductComponent from '../common/Product';
import data from './products.json';
import styles from './home.module.css';

const HomePageComponent = () => (
  <div className={styles.homeContainer}>
    {data && data.map((product) => (
      <ProductComponent key={product.title} data={product} />
    ))}
  </div>
);

export default HomePageComponent;
