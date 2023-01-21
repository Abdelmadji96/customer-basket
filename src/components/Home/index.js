import React from 'react';

import data from './products.json';
import styles from './home.module.css';
import BasketComponent from './helpers/BasketComponent';
import ProductsComponent from './helpers/ProductsComponent';

const HomePageComponent = () => (
  <div className={styles.homeContainer}>
    <ProductsComponent data={data} />
    <BasketComponent />
  </div>
);

export default HomePageComponent;
