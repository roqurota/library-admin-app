const electron = require('electron')
const path = require('path')
const fs = require('fs')

class Store {
    constructor(options) {
        const appDataPath = (electron.app || electron.remote.app).getPath('userData')

        this.path = path.join(appDataPath, options.configname + '.json')
        this.data = parseDataFiled(this.path, options)
    }

    get(key) {
        return this.data[key]
    }

    set(key, value) {
        this.data[key] = value

        fs.writeFileSync(this.path, JSON.stringify(this.data))
    }
    
}

function parseDataFiled(filePath, options) {
    try {
        return JSON.parse(fs.readFileSync(filePath))
    } catch (err) {
        fs.writeFileSync(filePath, JSON.stringify(options.init))
    }
}

module.exports = Store
