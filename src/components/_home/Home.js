import React, { Component } from 'react'
import {UserContext} from '../../assets/UserContext'
class Home extends Component {

    constructor(props) {
        super();
        this.state = {}
    }

    componentWillMount() {
        this.setState({
            user: this.context.user,
            authed: this.context.authed,
            login: this.context.login
        });
            
    }
    render() {
        return(
            <React.Fragment>
                <p>Home! {this.state.user}</p>
            </React.Fragment>
        );
    }
}
Home.contextType = UserContext;
export default Home;
