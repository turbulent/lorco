const { log } = console;

const getColorsFromSymbols = symbols => symbols.map((symbol) => {
  try {
    const [layer] = symbol.layers;
    const style = layer.get('style').toJson();

    if (!style.fills) {
      return null;
    }

    const [fill] = style.fills;

    const { color } = fill;
    const { name } = symbol;

    return { name, color };
  } catch (err) {
    return log('[Warn] - Sketch file seems to be malformated. Some colors could be missing.');
  }
});

module.exports = getColorsFromSymbols;
