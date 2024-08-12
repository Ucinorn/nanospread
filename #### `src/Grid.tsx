// src/Grid.tsx
import React from 'react';
import Nano from './Nano.tsx';

interface GridProps {
    numRows: number;
    numCols: number;
}

const Grid: React.FC<GridProps> = ({ numRows, numCols }) => {
    const grid = [];
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            // Each Nano component will have a unique key based on its position in the grid
            grid.push(
                <Nano key={`${row}-${col}`} count={(row * numCols) + col + 1} level={row % 3} />
            );
        }
    }
    return <div style={{ display: 'grid', gridTemplateColumns: `repeat(${numCols}, auto)` }}>{grid}</div>;
};

export default Grid;
