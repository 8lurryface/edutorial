import React, {Component} from 'react'
import Routes from './Routes'
import {BrowserRouter as Router} from 'react-router-dom'
import {UserContext} from './assets/UserContext'
import Menu from './components/_menu/Menu'

class App extends Component {

    constructor(props) {
        super();
        this.auth  = (user, login) => {
            this.setState({
                authed: true,
                user: user,
                login: login
            })
        }
        this.logout = () => {
            this.setState({
                authed: false,
                user: "",
                login: ""
            })
        }
        this.state={
            authed: false,
            user: "user",
            auth: this.auth,
            logout: this.logout,
            login: ""
        }
    }
    render() {
        return(
                <Router>
                     <React.Fragment>
                         <UserContext.Provider value={this.state}>
                            {this.state.authed ? <Menu user={this.state.login}/> : null}
                            <Routes authed={this.state.authed}/>
                        </UserContext.Provider>
                    </React.Fragment>
                </Router>
            
        )
    }
}

export default App;