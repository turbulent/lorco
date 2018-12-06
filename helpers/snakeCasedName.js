const snakeCasedName = (name = null) => {
  if (!name) {
    return;
  }

  return name
    .toLowerCase()
    .split('/')
    .map(name => name.trim().replace(/\s+/g, '-'))
    .join('-');
}

module.exports = snakeCasedName;