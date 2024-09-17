const { app, BrowserWindow } = require("electron");
const fs = require("fs");
const path = require("path");

const createWindow = () => {
  const nonce = Math.random().toString(36).substr(2, 15); // Generate a random nonce
  const win = new BrowserWindow({
    width: 1800,
    height: 1600,
    icon: __dirname + "./img/rocket_icon.png",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // Load HTML file
  win.loadFile(path.join(__dirname, "main.html"));
};

app.whenReady().then(createWindow);
