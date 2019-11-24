<div align="center">

[![npm version](https://img.shields.io/npm/v/vue-easy-loader.svg)](https://www.npmjs.com/package/vue-easy-loader)
[![npm downloads](https://img.shields.io/npm/dt/vue-easy-loader.svg)](https://www.npmjs.com/package/vue-easy-loader)
[![license](https://img.shields.io/github/license/tomgrv/vue-easy-loader.svg)](https://github.com/tomgrv/vue-easy-loader/blob/master/LICENSE)

</div>

# vue-easy-loaderrouter

Light vue component loader based on folder tree packaged as a vue plugin

## Installation

```bash
$ npm install vue-easy-loader
```

## Usage

Declare as Vue plugin in your application:

```js
import VueEasyLoader from "vue-easy-loader";
Vue.use(VueEasyLoader, [
  { src: require.context("./layouts", true, /\.vue$/i), prefix: "layouts" },
  { src: require.context("./components", true, /\.vue$/i), prefix: true }
]);
```

## Options

Each loader entry can handle following items:

```js
{
  "src": require.context("...", true, /\.vue$/i),
   "prefix": "..."
}
```

### `src`

- Type: context object
- Default: `undefined`
- Details: context object
- Restrictions: path must be hard coded and cannot be a variable

### `prefix`

- Type: `String` or `Boolean`
- Default: `undefined`
- Details: Indicates how to name loaded objects. If `true`, use subfolder names
- Restrictions: none
