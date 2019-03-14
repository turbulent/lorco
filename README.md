![Lorco logo](docs/images/lorco-logo.png)

[![CircleCI](https://img.shields.io/circleci/project/github/turbulent/lorco/master.svg)](https://circleci.com/gh/turbulent/lorco) [![Test Coverage](https://api.codeclimate.com/v1/badges/107b5f879f6a75641f43/test_coverage)](https://codeclimate.com/github/turbulent/lorco/test_coverage) [![Maintainability](https://api.codeclimate.com/v1/badges/107b5f879f6a75641f43/maintainability)](https://codeclimate.com/github/turbulent/lorco/maintainability)

# Lorco

Lorco is a CLI tool which extract colors from a Sketch Library file to variables in many formats including Sass, Less, CSS, JSON, JavaScript.

## Basic Usage

### As a library

1. `npm install --save lorco`

```js
const lorco = require('lorco');

// Async/await
const getColor = async () => {
  const colors = await lorco('example.sketch', 'scss', 'hex');

  return colors;
};

// Promise
const colors = lorco('example.sketch', 'scss', 'hex')
  .then((color) => colors);
```

### As a CLI

1. `npm install -g lorco`
2. `lorco -s example.sketch -l css [-d example.css, -c hex]`

Or With [npx](https://www.npmjs.com/package/npx):

- `npx lorco -s example.sketch -l css [-d example.css, -c hex]`

## API

### `lorco`

`lorco` function takes three parameters:

| param | type | default value | description |
|-------|------|---------------|-------------|
| file | string | - | Path to the Sketch file. |
| language | 'scss' , 'css' , 'less' , 'js' , 'json' | 'scss' | output target language. |
| colorOutput | 'rgba' , 'rgb' , 'hex' | rgba | output color format |

## CLI Options

You can change the behaviour of Lorco with several command line arguments.

To get list of all available commands, run `lorco --help`

```
~> lorco --help
Usage: lorco -s example.sketch -l css [-d example.css, -c hex]

Options:
  -s, --source <sketch-file>                           indicate the source sketch file.
  -l, --language <one of [css, js, json, scss, less]>  indicate the language you want to build, default: Scss.
  -d, --destination <destination-file>                 indicate the destination of generated file.
  -c, --color <one of [hex, rgb, rgba]>                indicate output color format, default: rgba.
  -h, --help                                           output usage information

```

## Sketch file structure

Sketch Library file should be made of named symbols containing a shape fill with color.

You can find [An example of file here](https://github.com/turbulent/lorco/blob/master/test/sample.sketch)

## Tests

Tests are in `test` directory, and are writter with [Ava](https://github.com/avajs/ava)

Tests can be running with `npm run test`

### Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository][https://github.com/turbulent/lorco/releases].
