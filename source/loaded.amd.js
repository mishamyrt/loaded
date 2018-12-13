const define = require('define')
const {
    imagesLoaded,
    imageLoaded,
    nodeLoaded,
} = require('./index.js')


define('loaded/images', [], () => imagesLoaded)
define('loaded/image', [], () => imageLoaded)
define('loaded/node', [], () => nodeLoaded)
