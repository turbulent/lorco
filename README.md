# Lorco

Lorco is a cli tool which extract colors from a sketch file and generate a .scss file with variables.

## Installation

## How to use

- Copy your file into `./files` folder
- Run `npm run build`
- Open `./generated/_colors.scss`

By default script will take the first file he find.
You can also specified which file you want to build

- `npm run build -- file=my-awesome-file.sketch`