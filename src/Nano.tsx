import type { Component } from 'solid-js';
import { createSignal, onCleanup } from "solid-js";
import { mergeProps } from "solid-js";

const Nano: Component = () => {
    const merged = mergeProps({ greeting: "Hi", name: "John" }, props);
}
export default Nano