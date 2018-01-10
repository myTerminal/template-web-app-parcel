# template-web-parcel

[![Code Climate](https://codeclimate.com/github/myTerminal/template-web-parcel.png)](https://codeclimate.com/github/myTerminal/template-web-parcel)
[![bitHound Overall Score](https://www.bithound.io/github/myTerminal/template-web-parcel/badges/score.svg)](https://www.bithound.io/github/myTerminal/template-web-parcel)
[![bitHound Code](https://www.bithound.io/github/myTerminal/template-web-parcel/badges/code.svg)](https://www.bithound.io/github/myTerminal/template-web-parcel)  
[![Dependency Status](https://david-dm.org/myTerminal/template-web-parcel.svg)](https://david-dm.org/myTerminal/template-web-parcel)
[![devDependency Status](https://david-dm.org/myTerminal/template-web-parcel/dev-status.svg)](https://david-dm.org/myTerminal/template-web-parcel#info=devDependencies)
[![peer Dependency Status](https://david-dm.org/myTerminal/template-web-parcel/peer-status.svg)](https://david-dm.org/myTerminal/template-web-parcel#info=peerDependencies)  
[![License](https://img.shields.io/badge/LICENSE-GPL%20v3.0-blue.svg)](https://www.gnu.org/licenses/gpl.html)
[![Gratipay](http://img.shields.io/gratipay/myTerminal.svg)](https://gratipay.com/myTerminal)  

A template to create web applications on Node.js with [Parcel.js](https://parceljs.org) as the bundler

## Technologies

### Server

[Express](https://www.npmjs.com/package/express) as the web server with [body parser](https://www.npmjs.com/package/body-parser) to serve static resources.

### Client

#### Web Application

 - [React](https://facebook.github.io/react/)
 - [ReactDOM](https://facebook.github.io/react/docs/react-dom.html)
 - [ReactRouterDOM](https://www.npmjs.com/package/react-router-dom)
 - [Bootstrap 3](https://getbootstrap.com/docs/3.3/)
 - [Font Awesome](http://fontawesome.io/)
 - [jQuery](https://jquery.com/) as a dependency for Bootstrap
 - [ES2015](http://es6-features.org/)
 - [Less CSS](http://lesscss.org/)

#### Module bundler: Parcel

All that is required is the [parcel-bundler](https://www.npmjs.com/package/parcel-bundler) and it takes care of everything else implicitly.

##### A few other packages

 - [babel-preset-env](https://www.npmjs.com/package/babel-preset-env) to transpile ES2015 scripts to regular JavaScript and [bable-preset-react](https://www.npmjs.com/package/babel-preset-react) to transpile JSX files to regular JavaScript files that web-browsers can interpret but no [babel-core](https://www.npmjs.com/package/babel-core)!
 - [jshint](https://www.npmjs.com/package/jshint) for running JSHint to lint JavaScript files
 - [jscs](https://www.npmjs.com/package/jscs) for checking code styles in JavaScript files
 - [less](https://www.npmjs.com/package/less) to help parcel-bundler with transpilation of Less CSS into regular CSS (if you do not include this, parcel-bundle automatically adds it)

##### Commands

 - `npm run develop` to instruct parcel-bundler to build the website, keep watching for file changes within source and reload the web-browser on every change.
 - `npm run live` to instruct parcel-bundler to build the website, keep watching for file changes within source and reload the web-browser on every change.  
 In this mode, parcel-bundler also starts a web-server of its own.  
 Please note that Express is not the web-server in this mode and hence any web-services implemented in "src\server\index.js" will not work.
 - `npm run build` to instruct parcel-bundler to build the website and stop.  
 - `npm run lint` to run jscs and jshint on all JavaScript source files.

## To-Do

 - Find a way to generate source-maps
 - Find a way to copy favicon.ico and other data for the website
 - Find a way to write and run tests
