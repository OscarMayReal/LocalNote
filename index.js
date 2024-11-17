const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')

function createWindow () {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
        color: '#ffffff',
        symbolColor: '#444444',
        height: 59
    }
  })
  win.loadFile('src/index.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
    app.quit()
})