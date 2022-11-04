import React from 'react';

const Meat = () => {
  const keyUniq = Math.random();
  return (
    <div key={keyUniq} className="Meat"></div>
  );
};

export default Meat;