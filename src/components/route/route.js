import React, { Component } from 'react';
import {  Route, Switch, withRouter } from "react-router-dom";
import Home from '../../Home'
import About from '../../About'
import Project from '../../Project';
import NoPage from '../../Nopage';
class RouteURL extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/project/{id}" exact component={Project} />
                <Route path="*" component={NoPage} />
            </Switch>
        )
    }
}

export default withRouter(RouteURL);