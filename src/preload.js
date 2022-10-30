import { ipcRenderer, contextBridge } from 'electron';
import fs from 'fs'

var {parse} = require('csv-parse');


contextBridge.exposeInMainWorld('electron', {
  openDialog: () => {
    ipcRenderer.send('open-dialog') // adjust naming for your project
  },
  openCSV: (filePath) => {

    return new Promise((resolve, reject) => {
        let data = []
        fs.createReadStream(filePath)
        .pipe(parse({delimiter: ',', columns: true}))
        .on('data', function(csvrow) {
            data.push(csvrow);        
        })
        .on('end',function() {

            resolve(data)

            // const [keysList, ...valuesList] = data;
            // let obj = {};
            // //Loop through the values list
            // keysList.forEach((col, i) => {
                
            //     obj[col] = []
            // //Since each element in values list is a list again
            // //loop through the list and add them to the `obj` object
            //     valuesList.forEach((val) => {
            //         obj[col].push(val[i]);
            //     })
            // });
            
            // resolve(obj)
        });
    });

    },
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



