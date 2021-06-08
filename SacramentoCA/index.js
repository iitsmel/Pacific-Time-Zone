const { menubar } = require('menubar');
const mb = menubar({ dir: __dirname + '/app', width: 200, height: 200, preloadWindow: true });
var ipc = require('electron').ipcMain

mb.on('show', () => {
  console.log('app is ready');
  mb.window.webContents.send('show');
});
mb.app.on('activate', function () {
  mb.showWindow();
})

ipc.on('abort', function () {
  mb.hideWindow();
})