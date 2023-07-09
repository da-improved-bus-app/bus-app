import React from 'react';

const Card = ({children}) => {
  return (
    <div className="bg-white w-100 rounded-xl p-6 border my-3">
      {children}
    </div>
  );
};

export default Card;
