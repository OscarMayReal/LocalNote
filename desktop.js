const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  win.loadFile('src/index.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
    app.quit()
})