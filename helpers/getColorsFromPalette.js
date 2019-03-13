const getColorsFromPalette = (palette) => {
  if (!palette) {
    return [];
  }

  // Get parents of first item in palette,
  // in order to get Name
  const { colorAssets } = palette.getParent().toJson();

  return colorAssets.map((currentColor) => {
    const { name, color } = currentColor;

    return { name, color };
  });
};

module.exports = getColorsFromPalette;
