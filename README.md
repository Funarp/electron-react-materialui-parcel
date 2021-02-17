# electron-react-materialui-parcel

A minimal Electron + React.js + material-UI boilerplate with [parcel as bundler](https://github.com/parcel-bundler/parcel). Parcel is an alternative web application bundler to Webpack.

## Installation

* `git clone https://github.com/Funarp/electron-react-materialui-parcel`
* `cd Electron-React-MaterialUI-Parcel`
* `yarn install`

## Usage

### Development mode
Run these commands to start dev server and Electron app
``` bash
# Parcel bundles the code and runs dev server
$ yarn dev

# Run the electron app which uses local dev server
$ yarn start-dev
```

### Production mode and packaging app
Run this command to bundle code in production mode
``` bash
# Parcel bundle code once
$ yarn build

# Create executables
$ yarn dist
```
