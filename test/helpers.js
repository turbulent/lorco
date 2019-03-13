const test = require('ava');

const createVariable = require('../helpers/createVariable');
const { transformToRGBA, transformToRGB, transformToHex } = require('../helpers/transformColors');

const createColor = require('../helpers/createColor');

test('transformToRGBA should return rgba value from float color object', async (t) => {
  const expectedColor = 'rgba(244, 172, 183, 1)';
  const floatColor = {
    alpha: 1,
    blue: 0.7176470588235294,
    green: 0.6745098039215687,
    red: 0.956862745098039,
  };

  const rgba = transformToRGBA(floatColor);

  t.is(rgba, expectedColor);
});

test('transformToRGB should return rgb value from float color object', async (t) => {
  const expectedColor = 'rgb(244, 172, 183)';
  const floatColor = {
    blue: 0.7176470588235294,
    green: 0.6745098039215687,
    red: 0.956862745098039,
  };

  const rgb = transformToRGB(floatColor);

  t.is(rgb, expectedColor);
});

test('transformToHex should return Hexadecimal value from float color object', async (t) => {
  const expectedColor = '#f4acb7';
  const floatColor = {
    blue: 0.7176470588235294,
    green: 0.6745098039215687,
    red: 0.956862745098039,
  };

  const rgba = transformToHex(floatColor);

  t.is(rgba, expectedColor);
});

test('Ensure createVariable return variable with name, color and syntax passed in parameters', async (t) => {
  const variable = createVariable('variable example', 'rgba(244, 172, 183, 1)', 'scss');

  t.is(variable, '$variable-example: rgba(244, 172, 183, 1);');
});

test('createColor should failed if no color provided', async (t) => {
  t.throws(() => {
    createColor(null, 'rgba');
  },
  {
    instanceOf: Error,
    message: 'No color defined',
  });
});

test('createColor should return rgba by default', async (t) => {
  const floatColor = {
    blue: 0.7176470588235294,
    green: 0.6745098039215687,
    red: 0.956862745098039,
    alpha: 1,
  };

  const expectedColor = createColor(floatColor);

  t.is(expectedColor, 'rgba(244, 172, 183, 1)');
});

test('createColor should return rgb if rgb is defined as colorFormat', async (t) => {
  const floatColor = {
    blue: 0.7176470588235294,
    green: 0.6745098039215687,
    red: 0.956862745098039,
  };

  const expectedColor = createColor(floatColor, 'rgb');

  t.is(expectedColor, 'rgb(244, 172, 183)');
});

test('createColor should return hexadecimal if hexadecimal is defined as colorFormat', async (t) => {
  const floatColor = {
    blue: 0.7176470588235294,
    green: 0.6745098039215687,
    red: 0.956862745098039,
  };

  const expectedColor = createColor(floatColor, 'hex');

  t.is(expectedColor, '#f4acb7');
});
