const mendStr = require('mendeleev-stringify');
const fs = require('fs');

module.exports = (path) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if(err){
            throw new Error('no file');
        }
        else{
            data.split('\r\n').forEach((element) => {
                console.log(mendStr(element));
            })
        }
    })
}