const test = require('ava');
const fs = require('fs');
const lorco = require('../src/lorco.js');


const createFile = require('../helpers/createFile');
const formatter = require('../helpers/formatter');

test('Lorco should get 4 colors from symbols and 2 from palette of sample file', async (t) => {
  const colors = await lorco('test/sample.sketch');

  t.is(colors.length, 6);
});

test('Lorco should get 4 Scss colors from symbols and 2 from palette from sample file', async (t) => {
  const colors = await lorco('test/sample.sketch');

  const colorsExpected = [
    '$nadeshiko-pink: rgba(244, 172, 183, 1);',
    '$mountbatten-pink: rgba(157, 129, 137, 1);',
    '$registration-black: rgba(0, 0, 0, 1);',
    '$gainsboro: rgba(206, 223, 217, 1);',
    '$grey-of-sky: rgba(206, 223, 217, 1);',
    '$green-highlands: rgba(32, 218, 152, 1);',
  ];

  t.deepEqual(colors, colorsExpected);
});

test('Lorco should get 4 Less colors from symbols and 2 from palette from sample file', async (t) => {
  const colors = await lorco('test/sample.sketch', 'less');

  const colorsExpected = [
    '@nadeshiko-pink: rgba(244, 172, 183, 1);',
    '@mountbatten-pink: rgba(157, 129, 137, 1);',
    '@registration-black: rgba(0, 0, 0, 1);',
    '@gainsboro: rgba(206, 223, 217, 1);',
    '@grey-of-sky: rgba(206, 223, 217, 1);',
    '@green-highlands: rgba(32, 218, 152, 1);',
  ];

  t.deepEqual(colors, colorsExpected);
});

test('Lorco should get 4 Css colors from symbols and 2 from palette from sample file', async (t) => {
  const colors = await lorco('test/sample.sketch', 'css');

  const colorsExpected = [
    '--nadeshiko-pink: rgba(244, 172, 183, 1);',
    '--mountbatten-pink: rgba(157, 129, 137, 1);',
    '--registration-black: rgba(0, 0, 0, 1);',
    '--gainsboro: rgba(206, 223, 217, 1);',
    '--grey-of-sky: rgba(206, 223, 217, 1);',
    '--green-highlands: rgba(32, 218, 152, 1);',
  ];

  t.deepEqual(colors, colorsExpected);
});

test('Lorco should get 4 Js colors from symbols and 2 from palette from sample file', async (t) => {
  const colors = await lorco('test/sample.sketch', 'js');

  const colorsExpected = [
    'const nadeshikoPink = "rgba(244, 172, 183, 1)";',
    'const mountbattenPink = "rgba(157, 129, 137, 1)";',
    'const registrationBlack = "rgba(0, 0, 0, 1)";',
    'const gainsboro = "rgba(206, 223, 217, 1)";',
    'const greyOfSky = "rgba(206, 223, 217, 1)";',
    'const greenHighlands = "rgba(32, 218, 152, 1)";',
  ];

  t.deepEqual(colors, colorsExpected);
});

test('Lorco should get 4 Json colors from symbols and 2 from palette from sample file', async (t) => {
  const colors = await lorco('test/sample.sketch', 'json');

  const colorsExpected = [
    '"nadeshikoPink": "rgba(244, 172, 183, 1)",',
    '"mountbattenPink": "rgba(157, 129, 137, 1)",',
    '"registrationBlack": "rgba(0, 0, 0, 1)",',
    '"gainsboro": "rgba(206, 223, 217, 1)",',
    '"greyOfSky": "rgba(206, 223, 217, 1)",',
    '"greenHighlands": "rgba(32, 218, 152, 1)",',
  ];

  t.deepEqual(colors, colorsExpected);
});

test('Lorco CLI should be able to generate a file with colors from sample file', async (t) => {
  const colors = await lorco('test/sample.sketch', 'css');

  createFile('./test/sample', colors, 'css');

  const expectedColors = formatter(colors, 'css');
  const generatedFile = fs.readFileSync('./test/sample.css', 'utf-8');
  fs.unlinkSync('./test/sample.css');
  t.is(generatedFile, expectedColors);
});
