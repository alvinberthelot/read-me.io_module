const http = require('http');
const config = require('./../../config/config');

function getApi(path) {

  return new Promise(function (resolve, reject) {
    const url = config.api.url + (config.api.port ? ':' + config.api.port : '') + '/api' + path;
    http.get(url, res => {
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
      getApi('/extensions').then(r => {
        extensions = r.extensions;
        resolve(extensions);
      }).catch(e => {
        reject(e);
      });
    }
  });
}

function getTemplates() {
  return new Promise(function (resolve, reject) {
    getApi('/templates').then(r => {
      resolve(r.templates);
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