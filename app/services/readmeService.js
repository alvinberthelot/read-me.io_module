
const fs = require('fs');

function write(ext, stringFile) {
  return new Promise(function (resolve, reject) {

    fs.writeFile('README.' + ext, stringFile, (err) => {
      if (err) {
        reject(err);
      }
      resolve('The file has been writed!');
    });
  });
}

module.exports = {
  write: write
};