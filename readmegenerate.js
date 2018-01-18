#!/usr/bin/env node

const program = module.exports = require('commander');

const extensions = require('./extensions');

program.parse(process.argv);