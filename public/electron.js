const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

// Set ENV
process.env.NODE_ENV = 'production';

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 900, height: 680 });
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  mainWindow.on('closed', () => (mainWindow = null));

  const menu = Menu.buildFromTemplate([
    {
      label: 'Menu',
      submenu: [
        {
          label: "Author's Github",
          click() {
            shell.openExternal('https://github.com/jfuller957');
          }
        },
        { type: 'separator' },
        {
          label: 'Exit',
          click() {
            app.quit();
          }
        }
      ]
    }
  ]);

  Menu.setApplicationMenu(menu);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
