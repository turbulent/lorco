const camelCase = require('camelcase');
const slugify = require('@sindresorhus/slugify');

const createVariable = (name, rgba, language = 'scss') => {
  switch (language) {
    case 'less':
      return `@${slugify(name)}: ${rgba};`;
    case 'css':
      return `--${slugify(name)}: ${rgba};`;
    case 'js':
      return `const ${camelCase(slugify(name))} = "${rgba}";`;
    case 'json':
      return `"${camelCase(slugify(name))}": "${rgba}",`;
    default:
      return `$${slugify(name)}: ${rgba};`;
  }
};

module.exports = createVariable;
