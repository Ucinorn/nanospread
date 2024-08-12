import type { Component } from 'solid-js';
import { createSignal, onCleanup } from "solid-js";
import { mergeProps } from "solid-js";

const Nano: Component = () => {
    const { count, setCount } = createSignal( 0 );
    const { level, setLevel } = createSignal( 0 );
    const { direction, setDirection } = createSignal( null );
}
export default Nano