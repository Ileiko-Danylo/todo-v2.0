import React from 'react';

export const Stat = ({ children, quantity }) => {
  return (
    <>
      <div>{children}</div>
      <h1>{quantity}</h1>
    </>
  );
};
