import React from 'react';

function GameStatus(props) {
  const { isPlayerTurn, isGameOver, didPlayerWin } = props;

  let status = '';

  if (isGameOver) {
    status = didPlayerWin ? 'You win!' : 'You lose!';
  } else {
    status = isPlayerTurn ? 'Your turn' : 'Computer\'s turn';
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>{status}</h3>
        </div>
      </div>
    </div>
  );
}

export default GameStatus;
