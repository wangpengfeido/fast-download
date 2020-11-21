import { app, BrowserWindow } from "electron";

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (process.env.NODE_ENV === "development") {
    win.loadURL("http://localhost:3100");
  } else {
    // TODO: 本地文件
    win.loadFile("");
  }

  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
