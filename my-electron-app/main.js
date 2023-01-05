const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let win;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false
    },
  });

  console.log("Hello from electron !!! in ", __dirname);
  win.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();
  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);
});

const menu = [
  ...([]),
  {
    role: 'fileMenu',
  },
  ...([
    {
      label: 'Developer',
      submenu: [
        { role: 'reload' },
        { role: 'forcereload' },
        { type: 'separator' },
        { role: 'toggledevtools' },
      ],
    },
  ]
  ),
];

app.on('window-all-closed', () => {
  console.log("Type de plateforme : ", process.platform);
  if (process.platform !== 'darwin') app.quit();
});
