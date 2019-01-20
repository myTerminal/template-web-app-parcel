import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app.jsx';

import '../styles/styles.less';

global.jQuery = require('jquery');
const $ = global.jQuery,
    Bootstrap = require('bootstrap');

render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('page')
);
