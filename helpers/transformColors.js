const rgbHex = require('rgb-hex');

const transformToRGB = ({
  red, blue, green,
}) => `rgb(${Math.round(red * 255)}, ${Math.round(green * 255)}, ${Math.round(blue * 255)})`;

const transformToRGBA = ({
  red, blue, green, alpha,
}) => `rgba(${Math.round(red * 255)}, ${Math.round(green * 255)}, ${Math.round(blue * 255)}, ${alpha})`;

const transformToHex = ({
  red, blue, green,
}) => `#${rgbHex(transformToRGB({ red, blue, green }))}`;

module.exports = { transformToRGBA, transformToRGB, transformToHex };
