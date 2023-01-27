/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import styles from './product.module.css';
import { addToCard } from '../../../redux/reducers/productsSlice';

const ProductComponent = ({ data }) => {
  const {
    image, title, description, price, ctaLabel, review: { totalStars, stars }
  } = data;
  const dispatch = useDispatch();
  return (
    <div className={styles.productContainer}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} title={title} />
      </div>
      <div className={styles.contentWrapper}>
        <span>{title}</span>
        <p>{description}</p>
      </div>
      <div className={styles.reviewsWrapper}>
        <div className={styles.starRatings}>
          <div className={styles.fillRatings}>
            {Array.from({ length: stars }, (_, index) => (
              <span key={index}>★</span>
            ))}
          </div>
          <div className={styles.emptyRatings}>
            {Array.from({ length: totalStars }, (_, index) => (
              <span key={index}>★</span>
            ))}
          </div>
        </div>
        <div className={styles.price}>
          {`£${price}`}
        </div>
      </div>
      <div className={styles.ctaContainer} onClick={() => dispatch(addToCard(data))}>
        <span>{ctaLabel}</span>
      </div>
    </div>
  );
};

ProductComponent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    ctaLabel: PropTypes.string.isRequired,
    review: PropTypes.shape({
      totalStars: PropTypes.number.isRequired,
      stars: PropTypes.number.isRequired,
    })
  }).isRequired,
};

export default ProductComponent;
