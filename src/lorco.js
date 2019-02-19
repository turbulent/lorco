const ns = require('node-sketch');

const transformToRGBA = require('../helpers/transformToRGBA');
const createVariable = require('../helpers/createVariable');

const lorco = (file, language) => ns.read(file)
  .then((sketch) => {
    const { symbols } = sketch;

    const colors = symbols.map((symbol) => {
      const [layer] = symbol.layers;
      const style = layer.get('style').toJson();
      const [fill] = style.fills;

      const { color } = fill;

      const rgbacolor = transformToRGBA(color);
      const { name } = symbol;

      return createVariable(name, rgbacolor, language);
    });

    return colors;
  })
  .catch(err => new Error('Error: ', err));

module.exports = lorco;
