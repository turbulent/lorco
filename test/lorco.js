const test = require('ava');
const lorco = require('../src/lorco.js');

test('Lorco should get 4 colors from sample file', async (t) => {
  const colors = await lorco('test/sample.sketch');

  t.is(colors.length, 4);
});

test('Lorco should get 4 Scss colors from sample file', async (t) => {
  const colors = await lorco('test/sample.sketch');

  const colorsExpected = [
    '$nadeshiko-pink: rgba(244, 172, 183, 1);',
    '$mountbatten-pink: rgba(157, 129, 137, 1);',
    '$registration-black: rgba(0, 0, 0, 1);',
    '$gainsboro: rgba(206, 223, 217, 1);',
  ];

  t.deepEqual(colors, colorsExpected);
});

test('Lorco should get 4 Less colors from sample file', async (t) => {
  const colors = await lorco('test/sample.sketch', 'less');

  const colorsExpected = [
    '@nadeshiko-pink: rgba(244, 172, 183, 1);',
    '@mountbatten-pink: rgba(157, 129, 137, 1);',
    '@registration-black: rgba(0, 0, 0, 1);',
    '@gainsboro: rgba(206, 223, 217, 1);',
  ];

  t.deepEqual(colors, colorsExpected);
});

test('Lorco should get 4 Css colors from sample file', async (t) => {
  const colors = await lorco('test/sample.sketch', 'css');

  const colorsExpected = [
    '--nadeshiko-pink: rgba(244, 172, 183, 1);',
    '--mountbatten-pink: rgba(157, 129, 137, 1);',
    '--registration-black: rgba(0, 0, 0, 1);',
    '--gainsboro: rgba(206, 223, 217, 1);',
  ];

  t.deepEqual(colors, colorsExpected);
});

test('Lorco should get 4 JS colors from sample file', async (t) => {
  const colors = await lorco('test/sample.sketch', 'js');

  const colorsExpected = [
    'const nadeshikoPink = "rgba(244, 172, 183, 1)";',
    'const mountbattenPink = "rgba(157, 129, 137, 1)";',
    'const registrationBlack = "rgba(0, 0, 0, 1)";',
    'const gainsboro = "rgba(206, 223, 217, 1)";',
  ];

  t.deepEqual(colors, colorsExpected);
});

test('Lorco should get 4 Json colors from sample file', async (t) => {
  const colors = await lorco('test/sample.sketch', 'json');

  const colorsExpected = [
    '"nadeshikoPink": "rgba(244, 172, 183, 1)",',
    '"mountbattenPink": "rgba(157, 129, 137, 1)",',
    '"registrationBlack": "rgba(0, 0, 0, 1)",',
    '"gainsboro": "rgba(206, 223, 217, 1)",',
  ];

  t.deepEqual(colors, colorsExpected);
});
