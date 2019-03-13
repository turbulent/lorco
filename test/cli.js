const test = require('ava');
const fs = require('fs');
const lorco = require('../src/lorco.js');

const createFile = require('../helpers/createFile');
const formatter = require('../helpers/formatter');

test('Lorco CLI should be able to generate a file with colors from sample file', async (t) => {
  const colors = await lorco('test/sample.sketch', 'css');

  createFile('./test/sample', colors, 'css');

  const expectedColors = formatter(colors, 'css');
  const generatedFile = fs.readFileSync('./test/sample.css', 'utf-8');
  fs.unlinkSync('./test/sample.css');
  t.is(generatedFile, expectedColors);
});

test('Lorco CLI should be able to generate a file with colors from sample file to JSON', async (t) => {
  const colors = await lorco('test/sample.sketch', 'json');

  createFile('./test/sample', colors, 'json');

  const expectedColors = formatter(colors, 'json');
  const generatedFile = fs.readFileSync('./test/sample.json', 'utf-8');
  fs.unlinkSync('./test/sample.json');
  t.is(generatedFile, expectedColors);
});

test('Lorco CLI should be able to generate a file with colors from sample file to Scss', async (t) => {
  const colors = await lorco('test/sample.sketch', 'css');

  createFile('./test/sample.scss', colors);

  const expectedColors = formatter(colors, 'scss');
  const generatedFile = fs.readFileSync('./test/sample.scss', 'utf-8');
  fs.unlinkSync('./test/sample.scss');
  t.is(generatedFile, expectedColors);
});
