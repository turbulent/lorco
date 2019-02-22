const ns = require('node-sketch');

const createColor = require('../helpers/createColor');
const createVariable = require('../helpers/createVariable');
const getColorsFromPalette = require('../helpers/getColorsFromPalette');
const getColorsFromSymbols = require('../helpers/getColorsFromSymbols');

const lorco = async (file, language, colorOutput = 'rgba') => {
  try {
    const sketch = await ns.read(file);

    const { symbols, colors } = sketch;
    const [palette] = colors;

    const symbolsColors = getColorsFromSymbols(symbols);
    const paletteColors = getColorsFromPalette(palette);

    const colorsFromSketch = [...symbolsColors, ...paletteColors];

    return colorsFromSketch.map(({ name, color }) => {
      const extractedColor = createColor(color, colorOutput);
      return createVariable(name, extractedColor, language);
    });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = lorco;
