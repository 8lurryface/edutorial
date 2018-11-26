import React, { Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {Redirect, withRouter} from 'react-router'
import Home from './Home'
import Lectures from './components/Lecture'
import Test from './Test'


class Routes extends Component {
    render() {
        return(
            <Router basename={process.env.PUBLIC_URL}>
                <React.Fragment>
                    <Route exact path='/' component={Home} />
                    <Route path="/lectures" component={Lectures} />
                    <Route path="/tests" component={Test} />
                </React.Fragment>
            </Router>
        );
    }
}

export default Routes;