const ns = require('node-sketch');
const path = require('path');

const getFile = require('./helpers/getFile');
const transformToRGBA = require('./helpers/transformToRGBA');
const createScssVariable = require('./helpers/createScssVariable');
const createScssFile = require('./helpers/createScssFile');
const snakeCasedName = require('./helpers/snakeCasedName');

const file = `${__dirname}/files/${getFile()}`

ns.read(file)
  .then(sketch => {
    const { symbols } = sketch;
    const fileName = path.basename(file, '.sketch');

    const colors = symbols.map((symbol) => {
      const [layer, ...others] = symbol.layers;
      const style = layer.get('style').toJson();
      const [fill] = style.fills;

      const { color } = fill;

      const rgbacolor = transformToRGBA(color);
      const name = snakeCasedName(symbol.name);

      return createScssVariable(name, rgbacolor);
    });

    createScssFile(`_${fileName}.scss`, colors);
  })
  .catch((err) => new Error('Error: ', err));
