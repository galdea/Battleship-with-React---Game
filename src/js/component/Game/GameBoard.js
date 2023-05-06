import React from 'react';
import Square from './Square';

function GameBoard() {
  const boardSize = 10;
  const board = [];

  for (let i = 0; i < boardSize; i++) {
    const row = [];

    for (let j = 0; j < boardSize; j++) {
      row.push(<Square key={`${i}${j}`} />);
    }

    board.push(<div className="row" key={i}>{row}</div>);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>Player Board</h3>
        </div>
      </div>
      {board}
    </div>
  );
}

export default GameBoard;
