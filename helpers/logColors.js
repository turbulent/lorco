const chalk = require('chalk');

const { log } = console;
const success = chalk.bold.green;

const successMessage = (extension, count) => log(`\n${success('[success]')} ${extension} file output with ${count} color(s):\n`);

const formatJSON = (colors) => {
  colors.forEach((color, index) => {
    if (index === 0) log('{');
    log(`  ${color}`);
    if (index === colors.length - 1) log('}\n');
  });
};

const formatCSS = (colors) => {
  colors.forEach((color, index) => {
    if (index === 0) log(':root {');
    log(`  ${color}`);
    if (index === colors.length - 1) log('}');
  });
};

const logColors = (colors = [], extension = 'scss') => {
  successMessage(extension, colors.length);

  switch (extension) {
    case 'json':
      formatJSON(colors, extension);
      break;
    case 'css':
      formatCSS(colors, extension);
      break;
    default:
      colors.forEach(color => log(color));
      break;
  }
};

module.exports = logColors;
