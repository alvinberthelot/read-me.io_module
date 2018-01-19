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


program.parse(process.argv);
