const ns = require('node-sketch');

const createColor = require('../helpers/createColor');
const createVariable = require('../helpers/createVariable');
const getColorsFromPalette = require('../helpers/getColorsFromPalette');
const getColorsFromSymbols = require('../helpers/getColorsFromSymbols');

const lorco = (file, language, colorOutput = 'rgba') => ns.read(file)
  .then((sketch) => {
    const { symbols, colors } = sketch;
    const [palette] = colors;

    const symbolsColors = getColorsFromSymbols(symbols);
    const paletteColors = getColorsFromPalette(palette);

    const colorsFromSketch = [...symbolsColors, ...paletteColors];

    return colorsFromSketch.map(({ name, color }) => {
      const extractedColor = createColor(color, colorOutput);
      return createVariable(name, extractedColor, language);
    });
  })
  .catch(err => new Error('Error: ', err));

module.exports = lorco;
