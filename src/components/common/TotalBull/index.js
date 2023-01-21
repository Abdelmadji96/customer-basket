import React from 'react';

import styles from './bull.module.css';

const TotalBullComponent = () => (
  <div className={styles.bullContainer}>
    <div className={styles.fieldWrapper}>
      <span className={styles.fieldLabel}>Subtotal</span>
      <span className={styles.fieldValue}>£6.05</span>
    </div>
    <div className={styles.fieldWrapper}>
      <span className={styles.fieldLabel}>Discount</span>
      <span className={styles.fieldValue}>£0.5</span>
    </div>
    <div className={styles.fieldWrapper}>
      <span className={styles.fieldLabel}>Total</span>
      <span className={styles.fieldValue}>£6.00</span>
    </div>
  </div>
);

export default TotalBullComponent;
