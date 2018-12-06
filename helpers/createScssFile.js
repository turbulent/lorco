const fs = require('fs');

const createScssFile = (filename = '_colors.scss', colors = []) => {
  const scssFile = fs.createWriteStream(`./generated/${filename}`);

  scssFile.on('error', (err) => console.log('Error: ', err));
  scssFile.on('finish', () => {
    console.log(`${filename} has been successfully created`);
  });

  colors.forEach((color) => scssFile.write(color + '\n'));
  scssFile.end();
};

module.exports = createScssFile;