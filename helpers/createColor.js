const { transformToRGBA, transformToRGB, transformToHex } = require('./transformColors');

const createColor = (color, colorFormat = 'rgba') => {
  if (!color) {
    throw new Error('No color defined');
  }

  switch (colorFormat) {
    case 'hex':
      return transformToHex(color);
    case 'rgb':
      return transformToRGB(color);
    default:
      return transformToRGBA(color);
  }
};

module.exports = createColor;
