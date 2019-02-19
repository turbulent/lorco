const ns = require('node-sketch');

const createColor = require('../helpers/createColor');
const createVariable = require('../helpers/createVariable');

const lorco = (file, language, colorOutput = 'rgba') => ns.read(file)
  .then((sketch) => {
    const { symbols } = sketch;

    const colors = symbols.map((symbol) => {
      const [layer] = symbol.layers;
      const style = layer.get('style').toJson();
      const [fill] = style.fills;

      const { color } = fill;

      const extractedColor = createColor(color, colorOutput);

      const { name } = symbol;

      return createVariable(name, extractedColor, language);
    });

    return colors;
  })
  .catch(err => new Error('Error: ', err));

module.exports = lorco;
