# Pairing

A very simple [Node.js](https://nodejs.org/) non-production application, using a [React](https://facebook.github.io/react/) UI.

This is mainly to play with Facebook's [create-react-app](https://github.com/facebookincubator/create-react-app), instead of home-rolling.


Installation:
```sh
$ cd pairing
$ npm install
```
Start up a development server (Hot, shows linting errors etc.):
```sh
$ npm start
```
Create a release build:
```sh
$ npm run build
```

Run the test watcher in an interactive mode:
```sh
$ npm test
```

Create Jest coverage reports:
```sh
$ npm test -- --coverage
```

## Improvements
* I [usually](https://github.com/charlier/timer) use [Mocha](https://mochajs.org/) for tests, and prefer it to Jest, but that would probably mean eventually ejecting the application
* The component tests are very basic (and not all encompassing)
* Plopping in something like [react-css-modules](https://github.com/gajus/react-css-modules) would be good to try.
* There's a few accessibility bugs, like the application doesn't focus on the error message etc.
* Refactoring (and reducing the number of) components
