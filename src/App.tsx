import type { Component } from 'solid-js';
import { createSignal, onCleanup } from "solid-js";
import { createStore } from "solid-js/store";

const App: Component = () => {
  const [GS, setGS] = createStore({
    counter: 0,
    // Add other state properties here if needed
  });
  const [intervalId, setIntervalId] = createSignal(0);
  const tickSpeed = 100; // Tick speed in milliseconds

  // Increment function
  const increment = () => {
    setGS("counter", GS.counter >= 59 ? 0 : GS.counter + 1);
  };

  // Game loop
  const gameLoop = () => {
    setGS("counter", GS.counter >= 59 ? 0 : GS.counter + 1);
  };

  // Save game state to local storage
  const saveGame = () => {
    localStorage.setItem('incrementalGS', JSON.stringify(GS));
    console.log('Game saved!');
  };

  // Load game state from local storage
  const loadGame = () => {
    const savedState = localStorage.getItem('incrementalGS');
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      setGS(parsedState);
      console.log('Game loaded!');
    } else {
      console.log('No saved game found.');
    }
  };

  // Start the game loop
  const startGameLoop = () => {
    if (!intervalId()) {
      const interval = setInterval(gameLoop, tickSpeed);
      setIntervalId(interval);
      console.log('Game loop started');
    }
  };

  // Stop the game loop
  const stopGameLoop = () => {
    if (intervalId()) {
      clearInterval(intervalId());
      setIntervalId(0);
      console.log('Game loop stopped');
    }
  };

  // Cleanup interval on component unmount
  onCleanup(() => {
    if (intervalId()) {
      clearInterval(intervalId());
    }
  });

  return (
    <div>
      <header>
        <div>
        NanoSpread
        </div>
      </header>
      <main>

      </main>
      <footer>
        <div class="grid">
          <p>{GS.counter}</p>
          <div class="ml-auto"></div>
          <button class="btn" onClick={startGameLoop}>Start</button>
          <button class="btn"onClick={stopGameLoop}>Stop</button>
          <button class="btn"onClick={increment}>++</button>
          <button class="btn"onClick={saveGame}>Save Game</button>
          <button class="btn"onClick={loadGame}>Load Game</button>
    
        </div>

      </footer>
    </div>
  );
};

export default App;
