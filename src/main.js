const { app, BrowserWindow } = require("electron");
const fs = require("fs");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1800,
    height: 1600,
    icon: __dirname + "./assets/img/rocket_icon.png", // PATH from src folder
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  win.loadFile(path.join(__dirname, "main.html"));
};

app.whenReady().then(createWindow);
