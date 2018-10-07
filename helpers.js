const bgRegex = /url\(\s*(['"]?)(.*)\1\s*\)/

const getBackgroundImage = (node) => {
    const style = getComputedStyle(node)
    if (style.background !== '' || style.backgroundImage !== '') {
        const uri = style.background.match(bgRegex)
        return uri ? uri[2] : ''
    }
    return ''
}

export { getBackgroundImage }
