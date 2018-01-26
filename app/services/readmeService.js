
const fs = require('fs');
const prompt = require('prompt');
//var path = require('path');


prompt.start();


function write(ext, stringFile) {
  return new Promise(function (resolve, reject) {
    // path.exists('foo.txt', function(exists) { 
    //   if (exists) { 

    //   }  
    fs.writeFile('README.' + ext, stringFile, (err) => {
      if (err) {
        reject(err);
      }
      resolve('The file has been writed!');
    });
  });
}

function fill(variables, txt) {
  let variableRequired = variables.filter(variable => variable.required);
  let variableNameList = variableRequired.map(variable => variable.name);
  return new Promise(function (resolve, reject) {
    if (variableNameList && variableNameList.length > 0) {
      prompt.get(variableNameList, function (err, result) {
        if (err) {
          reject(err);
        }
        variableRequired.forEach(variable => {
          txt = txt.replace(variable.match, result[variable.name]);
        });
        resolve(txt);
      });
    } else {
      resolve(txt);
    }
  });
}

// {
//   template: 'basic',
//   extension: 'asciidoc',
//   file: 'blabla',
//   var_project: [{
//       name: 'title',
//       description: 'Title of your project',
//       match: '${project.title}',
//       required: true
//     }, {
//       name: 'description',
//       description: 'Description of your project',
//       match: '${project.description}',
//       required: false
//     }
//   ] 
//  }

module.exports = {
  write: write,
  fill: fill
};