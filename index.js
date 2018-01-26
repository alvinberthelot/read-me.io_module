#!/usr/bin/env node

/**
 * import module commander which 
 * contain the option -h by default
 * to list all the command with
 * their arguments
 */
const program = require('commander');

const api = require('./app/services/apiService');
const readme = require('./app/services/readmeService');

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
  .description('Get ReadMe, use --template and --ext options')
  .option(' --template [template]', 'Which setup the template you want')
  .option(' --ext [ext]', 'Which setup the template extension')
  .action((options) => {
    // if (options && options.ext && options.template) {
    api.generate(options.ext, options.template).then(res => {
      if (res.file && !res.err) {
        let promiseArrayReadme = [];

        if (res.var_project) {
          promiseArrayReadme.push(readme.fill(res.var_project, res.file));
        }

        Promise.all(promiseArrayReadme).then(resultFill => {
          readme.write(res.ext, resultFill[0] || res.file).then(res => {
            console.log(res);
          }).catch(err => console.error(err));
        }).catch(err => console.error(err));

      } else {
        console.error('ERROR : ' + res.err || 'unable to recover the file');
      }
    }).catch(e => console.error('ERROR : ' + e));
    // } else {
    //   console.error('ERROR : --template and --ext options must be defined');
    // }
  });
////---------------------------------- ////


program.parse(process.argv);
