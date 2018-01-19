const program = require('./readmegenerate');

program
    .command('extensions')
    .alias('e')
    .description('Get available extensions')
    .action(result => console.log('list of extensions'));