const file = require('../fileOps/file');

test('Can find absolute filepath', () => {
    const fs = require('fs')
    let filename  = 'data/data.csv';
    let absolutePath = file.getAbsolutePath(filename);

    //finding out if the file exists and then passing the test.
   fs.access(absolutePath, fs.F_OK, (err) => {
       let fileExists;
       if (err) {
           fileExists = false
        } else {
           fileExists = true;
       }
       expect(fileExists).toBeTruthy();
    });

});