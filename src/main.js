const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const path = require('path');

const createWindow = () => {
  const nonce = Math.random().toString(36).substr(2, 15); // Generate a random nonce
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true, // Set context isolation for security
    },
  });

  // Load HTML file
  win.loadFile(path.join(__dirname, 'main.html')).then(() => {
    // Inject the nonce into the script tag dynamically
    win.webContents.executeJavaScript(`
      const scriptTag = document.createElement('script');
      scriptTag.nonce = '${nonce}';
      scriptTag.text = \`
        particlesJS.load('particles-js', 'particles.json', function() {
          console.log('callback - particles.js config loaded');
        });
      \`;
      document.body.appendChild(scriptTag);
    `);
  });
};

app.whenReady().then(createWindow);
