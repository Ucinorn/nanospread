import type { Component } from 'solid-js';
import { createSignal, onCleanup } from "solid-js";


const App: Component = () => {

  const [counter, setCounter] = createSignal(0);
  let tickSpeed = 100; // Tick speed in milliseconds

  // Increment function
  const increment = () => {
    if (counter() >= 59) {
      setCounter(0);
    } else {
      setCounter(counter() + 1);
    }
  };

  // Game loop
  const gameLoop = () => {
    if ( counter() == 59 ) saveGame()
    increment()
  };

  // Save game state to local storage
  const saveGame = () => {
    const gameState = { counter: counter() };
    localStorage.setItem('incrementalGameState', JSON.stringify(gameState));
    alert('Game saved!');
  };

  // Load game state from local storage
  const loadGame = () => {
    const savedState = localStorage.getItem('incrementalGameState');
    if (savedState) {
      const gameState = JSON.parse(savedState);
      setCounter(gameState.counter);
      alert('Game loaded!');
    } else {
      alert('No saved game found.');
    }
  };

  // Start the game loop
  const interval = setInterval(gameLoop, tickSpeed);
  onCleanup(() => clearInterval(interval));

  return (
    <div class="">
      <header class="flex gap-1">
        <p>{counter()}</p>
        <div class="ml-auto"></div>
        <button onClick={increment}>++</button>
        <button onClick={saveGame}>Save Game</button>
        <button onClick={loadGame}>Load Game</button>
      </header>
      <main>

      </main>
      <footer>

      </footer>
    </div>
  );
};

export default App;
