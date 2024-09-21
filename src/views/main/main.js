const { app, BrowserWindow } = require("electron");
const fs = require("fs");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + './../../assets/img/rocket_icon.png', // PATH from src folder
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  console.log("ICON PATH: " + win.icon);
  win.loadFile(path.join(__dirname, "main.html"));
};

app.whenReady().then(createWindow);
