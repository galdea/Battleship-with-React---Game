import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Header } from './header.jsx';
import { Home } from './home.jsx';
import { Footer } from './footer.jsx';
import { Game } from './game/game.js';

import './css/style.css';

export const App = () => {
  const [appState, setAppState] = useState('welcome'); 

  const startPlay = () => {
    setAppState('play');
  };

  return (
    <React.Fragment>
      <Header />
      {appState === 'play' ? <Game /> : <Home startPlay={startPlay} />}
      <Footer />
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));