import React from 'react';
import {
    Route,
    NavLink
} from 'react-router-dom';

import Banner from './banner.jsx';
import Home from '../pages/home.jsx';
import About from '../pages/about.jsx';

export default class App extends React.Component {

    constructor () {
        super();

        this.state = {};
    }

    render () {
        return (
            <div>
                <Banner />
                <span className='fa fa-thumbs-o-up fa-lg'></span>
                <NavLink to='/' exact activeClassName='active'>Home</NavLink>
                <NavLink to='/about' activeClassName='active'>About</NavLink>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
            </div>
        );
    }
}
