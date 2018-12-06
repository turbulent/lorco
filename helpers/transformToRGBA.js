
const transformToRGBA = ({red, blue, green, alpha}) => {
  return `rgba(${Math.round(red * 255)}, ${Math.round(green * 255)}, ${Math.round(blue * 255)}, ${alpha})`;
};

module.exports = transformToRGBA;