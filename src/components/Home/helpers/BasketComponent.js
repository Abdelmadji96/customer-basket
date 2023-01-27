import React from 'react';
import { useSelector } from 'react-redux';
import BasketProductComponent from '../../common/BasketProduct';
import TotalBullComponent from '../../common/TotalBull';

const BasketComponent = () => {
  const products = useSelector((state) => state.products);
  return (
    <div>
      {!!products.products.length && (
        products.products.map((product) => (
          <BasketProductComponent key={product.key} data={product} />
        ))
      )}
      <TotalBullComponent
        subTotal={products.subTotal}
        discount={products.discount}
        total={products.total}
      />
    </div>
  );
};

export default BasketComponent;
