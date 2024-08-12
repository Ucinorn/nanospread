// src/Grid.tsx
import { Component } from 'solid-js';
import Nano from './Nano.tsx';

interface GridProps {
    numRows: number;
    numCols: number;
}

const Grid: Component<GridProps> = (props) => {
    const grid = [];
    for (let row = 0; row < props.numRows; row++) {
        for (let col = 0; col < props.numCols; col++) {
            // Each Nano component will have a unique key based on its position in the grid
            grid.push(
                <Nano key={`${row}-${col}`} count={(row * props.numCols) + col + 1} level={row % 3} />
            );
        }
    }
    return <div style={{ display: 'grid', gridTemplateColumns: `repeat(${props.numCols}, auto)` }}>{grid}</div>;
};

export default Grid;
