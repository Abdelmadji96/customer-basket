/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Counter from '../Counter';
import styles from './basketProduct.module.css';
import { decrementQuantity, incrementQuantity } from '../../../redux/reducers/productsSlice';

const BasketProductComponent = ({ data }) => {
  const {
    image, title, quantity, key, allPrice, price,
  } = data;
  const dispatch = useDispatch();
  return (
    <div className={styles.productContainer}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.contentContainer}>
        <span>{title}</span>
        <div className={styles.counterContainer}>
          <Counter
            decrementQuantity={() => dispatch(decrementQuantity(key))}
            incrementQuantity={() => dispatch(incrementQuantity(key))}
            quantity={quantity}
          />
        </div>
      </div>
      <div className={styles.price}>
        <span>{`£${allPrice || price}`}</span>
      </div>
    </div>
  );
};

BasketProductComponent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    allPrice: PropTypes.string,
    quantity: PropTypes.number.isRequired,
    key: PropTypes.number.isRequired,
  }).isRequired,
};
BasketProductComponent.defaultProps = {
  allPrice: 0,
};

export default BasketProductComponent;
