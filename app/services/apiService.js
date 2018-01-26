const http = require('http');
const config = require('./../../config/config');

function getApi(path, params) {

  return new Promise(function (resolve, reject) {
    let url = config.api.url + (config.api.port ? ':' + config.api.port : '') + '/api' + path;
    if (params && typeof params === 'object') {
      url += '?';
      Object.keys(params).forEach(param => {
        url += param + '=' + params[param] + '&';
      });
      url = url.slice(0, -1);
    }
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


function generate(ext, template) {
  return getApi('/generate', { template: template, ext: ext });
}

module.exports = {
  getExtensions: getExtensions,
  getTemplates: getTemplates,
  generate: generate,
  getHealth: getHealth
};