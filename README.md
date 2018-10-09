# Loaded [![Build Status](https://travis-ci.com/mishamyrt/loaded.svg?branch=master)][ci]

Small library with zero dependencies that lets you know that the content has loaded.

The library contains 3 functions that return a promise.

* `imagesLoaded` — Waiting for all the images in the node
* `imageLoaded` — Waiting for the picture on link
* `nodeLoaded` — Waiting for the appearance of the node in DOM by selector. Useful when using Knockout.js and other asynchronous libraries.

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

[ci]: https://travis-ci.com/mishamyrt/loaded