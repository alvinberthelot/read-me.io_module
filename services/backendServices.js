const http = require('http');
const config = require('./../config/config');

let request = {
  hostname: config.api.url,
  port: config.api.port,
  path: '/',
  agent: false  // create a new agent just for this one request
};

function getHealth() {

}

function getExtensions() {
  request.path = '/extensions';
  http.get(request, (res) => {
    if (res.err) {
      console.error('res.err');
    } else {
      console.log(res);
    }
  });
}

function getTemplates() {
  request.path = '/templates';
  http.get(request, (res) => {
    if (res.err) {
      console.error('res.err');
    } else {
      console.log(res);
    }
  });
}

function generate(ext, template) {

}

module.exports = {
  getExtensions: getExtensions,
  getTemplates: getTemplates,
  generate: generate,
  getHealth: getHealth
};