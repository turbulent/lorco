const ns = require('node-sketch');

const createColor = require('../helpers/createColor');
const createVariable = require('../helpers/createVariable');
const getColorsFromPalette = require('../helpers/getColorsFromPalette');
const getColorsFromSymbols = require('../helpers/getColorsFromSymbols');

/**
 * lorco - get colors from a Sketch file
 *
 * @param {string} file - Path to the Sketch file.
 * @param {('scss' | 'css' | 'less' | 'js' | 'json')} [language=scss] - output target language
 * @param {('rgba' | 'rgb' | 'hex')}  [colorOutput=rgba] - output color format
 * @returns {Promise.<string[], Error>} A promise that returns an array of string
 */

const lorco = async (file, language, colorOutput = 'rgba') => {
  try {
    const sketch = await ns.read(file);

    const { symbols, colors } = sketch;
    const [palette] = colors;

    const symbolsColors = getColorsFromSymbols(symbols);
    const paletteColors = getColorsFromPalette(palette);

    const colorsFromSketch = [...symbolsColors, ...paletteColors]
      .filter(item => item && item.color && item.name);

    return colorsFromSketch.map(({ name, color }) => {
      const extractedColor = createColor(color, colorOutput);
      return createVariable(name, extractedColor, language);
    });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = lorco;
