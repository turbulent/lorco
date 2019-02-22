const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const formatter = require('../helpers/formatter');

const { log } = console;
const success = chalk.bold.green;

const createFile = (filename = '_colors', colors = [], extension = 'scss') => {
  const fileExtension = path.extname(filename);

  const fileToCreate = fileExtension
    ? filename
    : `${filename}.${extension}`;

  fs.writeFileSync(
    `./${fileToCreate}`,
    formatter(colors, extension),
  );

  log(`${success('[Success]')} ${fileToCreate} has been successfully created`);
};

module.exports = createFile;
