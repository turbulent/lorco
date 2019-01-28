const fs = require('fs');

const formatJSON = (colors, file) => {
  colors.forEach((color, index) => {
    if (index === 0) file.write('{\n');
    file.write(`  ${color}\n`);
    if (index === colors.length-1) file.write('}\n');
  });
};

const formatCSS = (colors, file) => {
  colors.forEach((color, index) => {
    if (index === 0) file.write(':root {\n');
    file.write(`  ${color}\n`);
    if (index === colors.length-1) file.write('}\n');
  });
};

const createFile = (filename = '_colors', colors = [], extension = 'scss') => {

  const file = fs.createWriteStream(`./generated/${filename}.${extension}`);

  file.on('error', (err) => console.log('Error: ', err));
  file.on('finish', () => {
    console.log(`${filename}.${extension} has been successfully created`);
  });

  switch (extension) {
    case 'json':
      formatJSON(colors, file);
      break;
    case 'css':
      formatCSS(colors, file);
      break;
    default:
      colors.forEach((color) => file.write(color + '\n'));
      break;
  }

  file.end();
};

module.exports = createFile;
