const getColorsFromSymbols = (symbols) => {
  return symbols.map((symbol) => {
    const [layer] = symbol.layers;
    const style = layer.get('style').toJson();
    const [fill] = style.fills;

    const { color } = fill;
    const { name } = symbol;

    return { name, color };
  });
};

module.exports = getColorsFromSymbols;
