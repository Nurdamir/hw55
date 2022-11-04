import React from 'react';

const Salad = () => {
  const keyUniq = Math.random();
  return (
    <div key={keyUniq} className="Salad"></div>
  );
};

export default Salad;