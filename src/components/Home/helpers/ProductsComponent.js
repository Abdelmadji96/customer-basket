import React from 'react';
import PropTypes from 'prop-types';

import ProductComponent from '../../common/Product';
import styles from '../home.module.css';

const ProductsComponent = ({ data }) => (
  <div className={styles.productsContainer}>
    {
      data.map((product) => (
        <ProductComponent key={product.title} data={product} />
      ))
    }
  </div>
);

ProductsComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
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
  ).isRequired,
};

export default ProductsComponent;
