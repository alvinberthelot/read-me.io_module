#!/usr/bin/env node

/**
 * import module commander which 
 * contain the option -h by default
 * to list all the command with
 * their arguments
 */
const program = require('commander');
const api = require('./app/services/apiService');
////------- Extensions commands ------- ////

program
  .command('extensions')
  .alias('e')
  .description('Get available extensions')
  .action(() => {
    api.getExtensions().then(templates => {
      templates.forEach(template => console.log(template));
    }).catch(e => console.error('ERROR : ' + e));
  });

////---------------------------------- ////

////------- Templates commands ------- ////

program
  .command('templates')
  .alias('t')
  .description('Get available templates')
  .action(() => {
    api.getTemplates().then(templates => {
      templates.forEach(template => console.log(template));
    }).catch(e => console.error('ERROR : ' + e));
  });
////---------------------------------- ////

////------- Generate commands ------- ////

program
  .command('file')
  .alias('f')
  .description('Get ReadMe')
  .option(' --template [template]', 'Which setup the template you want')
  .option(' --ext [ext]', 'Which setup the template extension')
  .action((options) => {
    if (options && options.ext && options.template) {
      api.generate(options.ext, options.template).then(file => {
        console.log(file);
      }).catch(e => console.error('ERROR : ' + e));
    } else {
      console.error('ERROR : options --template and --ext must be defined');
    }
  });
////---------------------------------- ////


program.parse(process.argv);
