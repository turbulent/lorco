const ns = require('node-sketch');
const path = require('path');

global.appRoot = path.resolve(__dirname);

const lorco = require('./src/lorco');

const getFile = require('./helpers/getFile');
const getLanguage = require('./helpers/getLanguage');

const file = getFile();
const language = getLanguage();

if (file) {
  return language ? lorco(file, language) : lorco(file);
}

return console.log(`No Sketch file specified or no Sketch file found in ./files directory`);