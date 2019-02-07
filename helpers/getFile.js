const fs = require('fs');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));

const getFile = () => {
  const { fileArg } = argv;

  if (!fileArg) {
    const [file] = fs.readdirSync('./files/')
      .filter((target) => {
        if (target && path.extname(target) === '.sketch') {
          return target;
        }

        return null;
      });

    if (file) {
      return `${global.appRoot}/files/${file}`;
    }

    return null;
  }

  return `${fileArg}`;
};

module.exports = getFile;
