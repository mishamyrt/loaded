# Loaded [![Build Status](https://travis-ci.com/mishamyrt/loaded.svg?branch=master)][ci]

Small library with zero dependencies that lets you know that the content has loaded.

The library contains 3 functions that return a promise.

* `imagesLoaded` — Waiting for all the images in the node
* `imageLoaded` — Waiting for the picture on link
* `nodeLoaded` — Waiting for the appearance of the node in DOM by selector. Useful when using Knockout.JS and other asynchronous libraries.

## Usage

`Loaded` is distributed in the form of a Common.JS module, AMD module as well as in the form of IFFE for browser usage.

### Common.JS

Use npm:

```sh
$ npm install mishamyrt-loaded --save
```

And then import to your project:

```js
const { imagesLoaded,
        imageLoaded,
        nodeLoaded,
      } = require('mishamyrt-loaded')

const someNode = document.querySelector('.some-node')
imagesLoaded(someNode).then((node) => {
    // All images in node have been loaded
})

imageLoaded('/img/logo.png').then(() => {
    // Image loaded
})

nodeLoaded('.some-node').then((node) => {
    // Node loaded
})
```

### AMD

[Download the repository code](https://github.com/mishamyrt/loaded/archive/master.zip) and move `dist/loaded.amd.js` to the desired directory.

Then link scripts to page:
```html
<script src="path/to/require.js"
        type="text/javascript"></script>
<script src="path/to/loaded.amd.js"
        type="text/javascript"></script>
```

```js
require([
    'loaded/images',
    'loaded/image',
    'loaded/node',
], function (imagesLoaded, imageLoaded, nodeLoaded) {
    // Code here
})
```

### In–browser

Then link script to page:
```html
<script src="path/to/loaded.js"
        type="text/javascript"></script>
```

And then use same way as CommonJS, functions will import automatically.

[ci]: https://travis-ci.com/mishamyrt/loaded