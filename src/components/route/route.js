import React, { Component } from 'react';
import {  Route, Switch } from "react-router-dom";
import Home from '../../Home'
import About from '../../About'
import NoPage from '../../Nopage';

export default class RouteURL extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="*" component={NoPage} />
            </Switch>
        )
    }
}