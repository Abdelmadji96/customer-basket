import React from 'react';
import PropTypes from 'prop-types';

import styles from './product.module.css';

const ProductComponent = ({
  data: {
    image, title, description, price, ctaLabel, review: { totalStars, stars },
  }
}) => (
  <div className={styles.productContainer}>
    <div className={styles.imageWrapper}>
      <img src={image} alt="product" title="product" />
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
    <div className={styles.ctaContainer}>
      <span>{ctaLabel}</span>
    </div>
  </div>
);

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
