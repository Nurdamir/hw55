import React from 'react';

const Cheese = () => {
  const keyUniq = Math.random();
  return (
    <div key={keyUniq} className="Cheese"></div>
  );
};

export default Cheese;