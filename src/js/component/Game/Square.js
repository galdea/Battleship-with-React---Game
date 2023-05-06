import React from 'react';

function Square(props) {
  const { value, onClick } = props;
  const style = value === 'hit' ? 'square hit' : value === 'miss' ? 'square miss' : 'square';

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
