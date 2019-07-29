# template-web-parcel

[![License: CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-sa/4.0)

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

All you need is [parcel-bundler](https://www.npmjs.com/package/parcel-bundler) and it takes care of almost everything implicitly.

##### A few other packages

 - [babel-core](https://www.npmjs.com/package/babel-core), [babel-preset-env](https://www.npmjs.com/package/babel-preset-env) to transpile ES2015 scripts to regular JavaScript and [bable-preset-react](https://www.npmjs.com/package/babel-preset-react) to transpile JSX files to regular JavaScript files that web-browsers can interpret but no [babel-core](https://www.npmjs.com/package/babel-core)!
 - [less](https://www.npmjs.com/package/less) to help parcel-bundler with transpilation of Less CSS into regular CSS (if you do not include this, parcel-bundle automatically adds it)
 - [effortless-css](https://www.npmjs.com/package/effortless-css) to provide Less CSS mixins
 - [eslint](https://www.npmjs.com/package/eslint) and [babel-eslint](https://www.npmjs.com/package/babel-eslint) for running ESLint to lint JavaScript files
 - [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb), [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import), [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) and [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) to support eslint

##### Commands

 - `npm run develop` to instruct parcel-bundler to build the website, keep watching for file changes within the source and reload the web-browser on every change.
 - `npm run live` to instruct parcel-bundler to build the website, keep watching for file changes within the source and reload the web-browser on every change.  
 In this mode, parcel-bundler also starts a web-server of its own.  
 Please note that Express is not the web-server in this mode and hence any web-services implemented in "src\server\index.js" will not work.
 - `npm run build` to instruct parcel-bundler to build the website and stop.  
 - `npm run lint` to run ESLint on all JavaScript source files.

## To-Do

 - Find a way to generate source-maps
 - Find a way to copy favicon.ico and other data for the website
 - Find a way to write and run tests
