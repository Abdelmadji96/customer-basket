import React from 'react';
import PropTypes from 'prop-types';

import styles from './input.module.css';

const Counter = ({
  minNumber, maxNumber
}) => {
  console.log('minNumber', minNumber, maxNumber);
  return (
    <div className={styles.counterCompoenet}>
      <button type="button">&minus;</button>
      <span>3</span>
      <button type="button">&#43;</button>
    </div>
  );
};

Counter.propTypes = {
  minNumber: PropTypes.number.isRequired,
  maxNumber: PropTypes.number.isRequired,
};

export default Counter;
