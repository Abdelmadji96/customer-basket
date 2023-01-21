import React from 'react';
import Counter from '../Counter';

import styles from './basketProduct.module.css';

const BasketProductComponent = () => (
  <div className={styles.productContainer}>
    <div className={styles.imageWrapper}>
      <img src="product/butter.jpeg" alt="aaa" />
    </div>
    <div className={styles.contentContainer}>
      <span>Butter</span>
      <div className={styles.counterContainer}>
        <span>quantity</span>
        <Counter minNumber={1} maxNumber={20} />
      </div>
    </div>
    <div className={styles.price}>
      <span>£1.60</span>
    </div>
  </div>
);

export default BasketProductComponent;
