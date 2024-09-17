const { app, BrowserWindow } = require("electron");
const fs = require("fs");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1800,
    height: 1600,
    icon: __dirname + "./img/rocket_icon.png",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  win.loadFile(path.join(__dirname, "main.html"));
};

app.whenReady().then(createWindow);
