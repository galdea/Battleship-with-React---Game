import React, { useState } from 'react';
import Square from './Square';

function GameBoard(props) {
  const [squares, setSquares] = useState(Array(100).fill(null));

  function handleClick(i) {
    // Add logic to handle a square being clicked
    const newSquares = [...squares];
    newSquares[i] = 'miss';
    setSquares(newSquares);
  }

  return (
    <div className="game-board">
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => handleClick(i)} />
      ))}
    </div>
  );
}

export default GameBoard;
