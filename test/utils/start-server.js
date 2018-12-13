'use strict'

const StaticServer = require('static-server')

module.exports = () => {
    new StaticServer({
        rootPath: `${__dirname}/../..`,
        port: 1337,
        host: '127.0.0.1',
    }).start()
}
