import React from 'react';
import './TotalPrice.css';

interface PriceProps {
  price: number;
}

const Price: React.FC<PriceProps> = (props) => {
  return (
    <div className={'price'}>
      <strong>
        Total Price: {props.price} KGS
      </strong>
    </div>
  );
};

export default Price;