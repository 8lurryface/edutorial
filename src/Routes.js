import React, { Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/_home/Home'
import Lecture from './components/_lecture/Lecture'
import LectureList from './components/_lecture/LectureList'
import Test from './components/_test/Test'
import Login from './components/_login/Login'
import NewLecture from './components/_lecture/NewLecture'
import TestList from './components/_test/TestList'
import {PrivateRoute} from './components/_home/PrivateRoute'
import './css/style.css'

class Routes extends Component {

    render() {
        console.log(this.props.authed);
        return(
                    <React.Fragment>
                        <PrivateRoute authed={this.props.authed} exact path='/' component={Home} />
                        <Route path='/login' component={Login} />
                        <Route exact path="/lectures" component={LectureList} />
                        <Route path='/lectures/read' component={Lecture} />
                        <Route path='/lectures/add' component={NewLecture} />
                        <Route path="/tests/take" component={Test} />
                        <Route exact path='/tests' component={TestList} />
                    </React.Fragment>
        );
    }
}

export default Routes;