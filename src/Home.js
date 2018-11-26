import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
        this.loggedIn = this.loggedIn.bind(this);
    }

    loggedIn() {
        if(this.state.loggedIn) {
            return "Log in";
        }
        else {
            return "Log out";
        }
    }
    render() {
        return(
            ""
        );
    }
}

export default Home;
