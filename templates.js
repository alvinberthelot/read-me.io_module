const program = require('./readmegenerate');
const api = require('./services/backendServices');

program
  .command('templates')
  .alias('t')
  .description('Get available templates')
  .action(() => {
    api.getTemplates().then(templates => {
      templates.forEach(template => console.log(template));
    }).catch(e => console.error('ERROR : ' + e));
  });
