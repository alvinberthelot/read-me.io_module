const https = require('https');
const config = require('./../config/config');

// let options = {
//   hostname: config.api.url,
//   port: config.api.port,
//   path: '/',
//   method: 'GET',
//   agent: false,
//   family: 4
// };
//  port: config.api.port,
//TODO : use options object

function getApi(path) {
  // options.path = path;

  return new Promise(function (resolve, reject) {

    https.get(config.api.url + path, res => {
      res.setEncoding('utf8');

      let body = '';

      res.on('data', data => {
        body += data;
      });

      res.on('end', () => {
        resolve(JSON.parse(body));
      });

      res.on('error', err => reject(err));

    });

  });
}

function getHealth() {
  return new Promise(function (resolve, reject) {
    getExtensions(true).then(() => {
      resolve('ok');
    }).catch(e => {
      reject(e);
    });
  });
}

let extensions = null;

function getExtensions(refresh) {
  return new Promise(function (resolve, reject) {
    if (extensions && !refresh) {
      resolve(extensions);
    } else {
      getApi('/posts/1').then(r => {
        extensions = r.title.split(' ');
        resolve(extensions);
      }).catch(e => {
        reject(e);
      });
    }
  });
}

function getTemplates() {
  return new Promise(function (resolve, reject) {
    getApi('/posts/2').then(r => {
      resolve(r.title.split(' '));
    }).catch(e => {
      reject(e);
    });
  });
}


// function generate(ext, template) {

// }

module.exports = {
  getExtensions: getExtensions,
  getTemplates: getTemplates,
  //generate: generate,
  getHealth: getHealth
};