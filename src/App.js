import React, {Component} from 'react'
import Menu from './components/Menu'
import Routes from './Routes'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
class App extends Component {
    render() {
        return(
           
                <Router>
                     <React.Fragment>
                        <Menu />
                        <Routes />
                </React.Fragment>
                </Router>
            
        )
    }
}

export default App;