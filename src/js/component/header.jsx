import React from 'react';

const Header = () => {

  return (
    <div>
      <h1> Welcome to Battleship</h1>

      <p className="subtitle"> Sink the enemy's ships. Win the war.</p>
      <span role="img" aria-label="anchor">
        ⚓️
      </span>
    </div>
  );
};

export default Header;