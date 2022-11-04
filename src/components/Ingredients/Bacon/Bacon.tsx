import React from 'react';

const Bacon = () => {
  const keyUniq = Math.random();
  return (
    <div key={keyUniq} className="Bacon"></div>
  );
};

export default Bacon;