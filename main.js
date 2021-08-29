const { app, Menu, ipcMain } = require('electron')
const path = require('path')
const MainWindow = require('./MainWindow')
const Store = require('./Store')

// Set env
process.env.NODE_ENV = 'development'

const isDev = process.env.NODE_ENV !== 'production' ? true : false

const store = new Store({
    configname: 'app-settings',
    init: {
        characters: []
    }
})

let mainWindow

app.on('ready', () => {
    mainWindow = new MainWindow('./app/index.html', isDev)

    mainWindow.webContents.on('dom-ready', () => {
        mainWindow.webContents.send('settings:get', store.get('characters'))
    })
})

app.allowRendererProcessReuse = true