import React from 'react';
import PropTypes from 'prop-types';

import styles from './bull.module.css';

const TotalBullComponent = ({ subTotal, discount, total }) => (
  <div className={styles.bullContainer}>
    <div className={styles.fieldWrapper}>
      <span className={styles.fieldLabel}>Subtotal</span>
      <span className={styles.fieldValue}>{`£${subTotal.toFixed(2)}`}</span>
    </div>
    <div className={styles.fieldWrapper}>
      <span className={styles.fieldLabel}>Discount</span>
      <span className={styles.fieldValue}>{`£${discount.toFixed(2)}`}</span>
    </div>
    <div className={styles.fieldWrapper}>
      <span className={styles.fieldLabel}>Total</span>
      <span className={styles.fieldValue}>{`£${total.toFixed(2)}`}</span>
    </div>
  </div>
);

TotalBullComponent.propTypes = {
  subTotal: PropTypes.number,
  discount: PropTypes.number,
  total: PropTypes.number,
};
TotalBullComponent.defaultProps = {
  subTotal: 0,
  discount: 0,
  total: 0,
};

export default TotalBullComponent;
