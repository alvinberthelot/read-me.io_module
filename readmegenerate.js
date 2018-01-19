#!/usr/bin/env node

/**
 * import module commander which 
 * contain the option -h by default
 * to list all the command with
 * their arguments
 */
const program = module.exports = require('commander');

const extensions = require('./extensions');
const templates = require('./templates');

program.parse(process.argv);