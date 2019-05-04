# typedoc-loader

[![Greenkeeper badge](https://badges.greenkeeper.io/andrewbranch/typedoc-loader.svg)](https://greenkeeper.io/)

A Webpack loader that converts TypeScript to [TypeDoc](http://typedoc.org) JSON.

## Usage

```js
module: {
  rules: [{
    test: /\.md$/,
    use: {
      loader: 'typedoc-loader',
      options: {
        // All options are passed to typedoc, except `mode` which is always `file`,
        // and `json` which is always `true`.
        // https://github.com/TypeStrong/typedoc#arguments
      }
    }
  }]
}
```

See additional documentation on [using loaders](https://webpack.js.org/concepts/loaders/#using-loaders).

## Testing & contributing

Tests are run with [Jest](https://facebook.github.io/jest):

```
npm install
npm test
```

Contributions are welcome! New features or bug fixes must include tests. Try to match existing code style, or better yet, add ESLint or Prettier to this project.
