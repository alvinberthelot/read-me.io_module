#!/usr/bin/env node

/**
 * import module commander which 
 * contain the option -h by default
 * to list all the command with
 * their arguments
 */
const program = require('commander');

////------- Extensions commands ------- ////

program
  .command('extensions')
  .alias('e')
  .description('Get available extensions')

  .action(result => console.log('list of extensions'));

////---------------------------------- ////

////------- Templates commands ------- ////

program
  .command('templates')
  .alias('t')
  .description('Get available templates')
  .action(result => console.log('list of templates'));

////---------------------------------- ////


program.parse(process.argv);