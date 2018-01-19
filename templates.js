const program = require('./readmegenerate');

program
  .command('templates')
  .alias('t')
  .description('Get available templates')
  .action(result => console.log('list of templates'));