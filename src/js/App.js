import React, { useState } from 'react';
import GameBoard from './component/Game/GameBoard';
import GameStatus from './component/Game/GameStatus';

function App() {
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [didPlayerWin, setDidPlayerWin] = useState(false);

  function handleSquareClick() {
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Battleship Game</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <GameBoard onClick={handleSquareClick} />
        </div>
        <div className="col-md-6">
          <GameBoard />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <GameStatus
            isPlayerTurn={isPlayerTurn}
            isGameOver={isGameOver}
            didPlayerWin={didPlayerWin}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
