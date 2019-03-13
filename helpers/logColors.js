const chalk = require('chalk');
const formatter = require('../helpers/formatter');

const { log } = console;
const success = chalk.bold.green;

const successMessage = (extension, count) => log(`\n${success('[success]')} ${extension} file output with ${count} color(s):\n`);

const logColors = (colors = [], extension = 'scss') => {
  successMessage(extension, colors.length);

  log(
    formatter(colors, extension),
  );
};

module.exports = logColors;
