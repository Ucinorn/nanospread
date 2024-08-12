// src/Nano.tsx
import { Component } from 'solid-js';

interface NanoProps {
    count: number;
    level: number;
}

const Nano: Component<NanoProps> = (props) => {
    return <div>Count: {props.count}, Level: {props.level}</div>;
};

export default Nano;
