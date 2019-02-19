#!/usr/bin/env node

const chalk = require('chalk');
const program = require('commander');

const lorco = require('../src/lorco');
const createFile = require('../helpers/createFile');
const logColors = require('../helpers/logColors');

const { log } = console;
const error = chalk.bold.red;

program
  .usage('-s example.sketch -l css [-d example.css, -c hex]')
  .option('-s, --source <sketch-file>', 'indicate the source sketch file.')
  .option('-l, --language <one of [css, js, json, scss, less]>', 'indicate the language you want to build, default: Scss.')
  .option('-d, --destination <destination-file>', 'indicate the destination of generated file.')
  .option('-c, --color <one of [hex, rgb, rgba]>', 'indicate output color format, default: rgba.')
  .parse(process.argv);

const logError = message => log(`${error('[error]')} ${message}`);

const bootstrap = async ({
  source, language, destination, color,
}) => {
  if (!source) {
    return logError('You should specify a sketch file as source file.');
  }

  if (!language) {
    return logError('You should specify a language as build target.');
  }

  const colors = await lorco(source, language, color);

  if (!destination) {
    return logColors(colors, language);
  }

  return createFile(destination, colors, language);
};

bootstrap(program);
