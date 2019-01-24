![Lorco logo](docs/images/lorco-logo.png)

# Lorco

Lorco is a cli tool which extract colors from a sketch file and build a Sass, Less, Css, Json or JavaScript file with color variables.

## Installation

## How to use

- Clone this repo
- Copy your file into `./files` folder
- Run `npm run build`
- Open `./generated/_colors.scss`

### File source

By default the script will take the first file he find (alphabetically).
You can also specified which file you want to build with this command:

- `npm run build -- --file=my-awesome-file.sketch`

### Variables language

By default script will build variables into a .scss file.
You can also specified which language you want to build.

- `npm run build -- lang=css`

Available language are: Scss, Less, Css, Json, JS