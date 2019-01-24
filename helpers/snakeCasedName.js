const slugify = require('@sindresorhus/slugify');
const snakeCasedName = (name = null) => {
  if (!name) {
    return;
  }

  return slugify(name);
}

module.exports = snakeCasedName;
