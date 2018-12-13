'use strict'

const {
    before,
    beforeEach,
    after,
    describe,
    it,
} = require('mocha')
const selenium = require('selenium-webdriver')
const startServer = require('./utils/start-server')
const expect = require('chai').use(require('chai-as-promised')).expect
require('chromedriver')
const until = require('selenium-webdriver/lib/until')

const getPage = (driver, pageName) => {
    return driver.get('http://127.0.0.1:1337/test/files/' + pageName + '.html')
}

describe('Loaded', () => {
    let driver

    before(() => {
        driver = new selenium.Builder()
            .forBrowser('chrome')
            .build()

        startServer()
    })

    beforeEach(() => {
        getPage(driver, 'wait')
    })

    after(() => {
        return driver.quit()
    })

    it('should wait images in node', () => {
        return driver.wait(
            until.elementLocated({ css: '.images-loaded' }), 5000
        )
            .then(expect(true).to.equal(true))
    }).timeout(5000)

    it('should wait image on link', () => {
        return driver.wait(
            until.elementLocated({ css: '.image-loaded' }), 5000
        )
            .then(expect(true).to.equal(true))
    }).timeout(5000)

    it('should wait generated node', () => {
        return driver.wait(
            until.elementLocated({ css: '.test-node' }), 2000
        )
            .then(driver.wait(
                until.elementLocated({ css: '.node-loaded' }), 300
            ))
            .then(expect(true).to.equal(true))
    }).timeout(5000)
})
