const fs = require('fs');
const path = require('path');

const getFile = () => {

  if (process.argv.length < 3) {
    const [file] = fs.readdirSync('./files/')
      .filter((file) => {
        if (file && path.extname(file) === '.sketch') {
          return file;
        }
      });

    return file;
  }

  const [_, __, file] = process.argv;

  return file.replace('file=', '');
}

module.exports = getFile;