// src/App.tsx
import { Component } from 'solid-js';
import Grid from './Grid.tsx';

const App: Component = () => {
    return (
        <div>
            <h1>SolidJS Grid Example</h1>
            <Grid numRows={3} numCols={4} />
        </div>
    );
};

export default App;
