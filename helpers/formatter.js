const formatCSS = colors => `:root {\n  ${colors.join('\n  ')}\n}`;

const formatJSON = colors => `{\n  ${colors.join('\n  ')}\n}`;

const formatter = (colors = [], language = null) => {
  if (!language) {
    throw new Error('language not defined.');
  }

  const output = colors;

  switch (language) {
    case 'json':
      // remove trailing comma
      output[output.length - 1] = output[output.length - 1].replace('",', '"');
      return formatJSON(colors);
    case 'css':
      return formatCSS(colors);
    default:
      return colors.join('\n');
  }
};

module.exports = formatter;
