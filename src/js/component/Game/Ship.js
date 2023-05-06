import React from 'react';

function Ship(props) {
  const { length } = props;

  return (
    <div className={`col-${length} ship`}>
      {[...Array(length)].map((_, i) => (
        <div key={i} className="ship-section"></div>
      ))}
    </div>
  );
}

export default Ship;
