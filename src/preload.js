import { ipcRenderer, contextBridge } from 'electron';
import fs from 'fs'

contextBridge.exposeInMainWorld('electron', {
  openDialog: () => {
    ipcRenderer.send('open-dialog') // adjust naming for your project
  },
  fs: fs,
  // Provide an easier way to listen to events
  on: (channel) => {
    return new Promise((resolve, reject) => {
        try {
            ipcRenderer.on(channel, (_, data) => {
                resolve(data)
            });
        } catch (e) {
            reject(e)
        }
      })

  },
});