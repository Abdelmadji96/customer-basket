import React from 'react';
import PropTypes from 'prop-types';

import styles from './input.module.css';

const Counter = ({ quantity, incrementQuantity, decrementQuantity }) => (
  <div className={styles.counterCompoenet}>
    <button type="button" onClick={decrementQuantity}>&minus;</button>
    <span>{quantity}</span>
    <button type="button" onClick={incrementQuantity}>&#43;</button>
  </div>
);

Counter.propTypes = {
  quantity: PropTypes.number,
  incrementQuantity: PropTypes.func.isRequired,
  decrementQuantity: PropTypes.func.isRequired,
};
Counter.defaultProps = {
  quantity: 0,
};

export default Counter;
