const BG_REGEX = /url\(\s*(['"]?)(.*)\1\s*\)/

const getBackgroundImage = (node) => {
    const style = getComputedStyle(node)
    if (style.background !== '' || style.backgroundImage !== '') {
        const uri = style.background.match(BG_REGEX)
        return uri ? uri[2] : ''
    }
    return ''
}

const getImagesUrl = (nodes) => {
    const images = []
    for (const node of nodes) {
        if (node.tagName === 'IMG') {
            images.push(node.getAttribute('src'))
        } else {
            const url = getBackgroundImage(node)
            if (url) {
                images.push(url)
            }
        }
    }
    return images
}

module.exports = {
    getImagesUrl,
}
