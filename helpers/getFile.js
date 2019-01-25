const fs = require('fs');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));

const getFile = () => {
  const { file } = argv;

  if (!file) {
    const [file] = fs.readdirSync('./files/')
      .filter((file) => {
        if (file && path.extname(file) === '.sketch') {
          return file;
        }
      });

    if (file) {
      return `${appRoot}/files/${file}`;
    }

    return null;
  }

  return file;
}

module.exports = getFile;
