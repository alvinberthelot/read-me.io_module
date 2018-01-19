const program = require('./readmegenerate');
const api = require('./services/backendServices');

program
  .command('extensions')
  .alias('e')
  .description('Get available extensions')
  .action(() => {
    api.getTemplates().then(templates => {
      templates.forEach(template => console.log(template));
    }).catch(e => console.error('ERROR : ' + e));
  });

