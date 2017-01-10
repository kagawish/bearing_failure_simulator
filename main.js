const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
	var win = new BrowserWindow({fullscreen: true});
	win.loadURL(`file://${__dirname}/views/index.html`);
});
