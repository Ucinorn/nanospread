#### NANOSPREAD

An incremental game built to test out solid.js. Loosely based on existing game Nanospread

https://stopsign.github.io/Nanospread/

### Premise

The game takes place on a level of randomly generated squares. Each square has a level, and count. Every tick, each square sends 1% of its count to adjacent squares (up, down, left, right). You start with only one square, and must activate all squares in the level. Some squares have a cost to activate, which acts as negative count: you must transfer that amount to activate it. You can choose to focus a square in a specific direction, and all of its tranfer goes in that direction. 

## Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm run dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)
