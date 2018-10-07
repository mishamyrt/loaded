const { getImagesUrl } = require('./helpers')

const imageLoaded = (url) => {
    return new Promise((resolve) => {
        const image = new Image()
        image.onload = resolve
        image.onerror = resolve
        image.src = url
    })
}

const imagesLoaded = (node) => {
    return new Promise((resolve) => {
        const checkableNodes = Array.from(node.querySelectorAll('*'))
        checkableNodes.push(node)
        const images = getImagesUrl(checkableNodes)
        if (images.length === 0) {
            resolve(node)
        } else {
            const promises = []
            images.forEach((url) => {
                promises.push(imageLoaded(url))
            })
            Promise.all(promises).then(() => {
                resolve(node)
            })
        }
    })
}

const nodeLoaded = (selector) => {
    return new Promise(function (resolve) {
        const checker = setInterval(() => {
            const node = document.querySelector(selector)
            if (node) {
                clearInterval(checker)
                resolve(node)
            }
        }, 100)
    })
}


module.exports = {
    imagesLoaded,
    imageLoaded,
    nodeLoaded,
}
