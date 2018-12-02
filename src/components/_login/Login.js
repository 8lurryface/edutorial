import React, {Component} from 'react'
import '../../css/style.css'
import $ from 'jquery'
import { UserContext } from '../../assets/UserContext';
class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            users: [],
            authed: false,
            userExists: undefined

        }
        this.getUsers = this.getUsers.bind(this);
        this.checkUser = this.checkUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const target = e.target;
        this.setState({
          [target.name]: target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.checkUser(this.state);
    }

    getUsers() {
        $.ajax({
            url: "../users.json",
            type: 'GET',
            dataType: 'json',
            success: function(parsed_json){
                this.setState({users: parsed_json.users});
            }.bind(this)
        });
    }
    componentWillMount() { 
        this.getUsers();
        this.setState({
            auth: this.context.auth,
            user: this.context.user,
            authed: this.context.authed
        })
    }
    checkUser(user) {     
        var self = this;
        var exists = false;
        var goThrough = function() {
            Array.prototype.map.call(self.state.users, function(user) {
                if(user.login === self.state.login && user.pass === self.state.pass) {
                    exists = true;
                    if(user.login === "admin") {
                        self.setState({user: "admin"});
                    }
                }
            })
        }

        $.when(goThrough()).done(function() {
            $.when(self.setState({userExists: exists})).done(function() {
                if(self.state.userExists) {
                    self.context.auth(self.state.user, self.state.login);
                    self.props.history.push({
                        pathname: "/",
                        state: {
                            user: self.state.user,
                            login: self.state.login,
                            authed: self.state.authed
                        }
                    })
                }
            })
            
        })

       
    }
    render() {
        const error = "Login or password is invalid"
        return(
            <div className="wrapper">
                <div className="login-wrapper">
                    <div className="thumbnail"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg" alt=""/></div>
                        <h1 className="title">Edutoria</h1>
                        <form className="login-form" onSubmit={this.handleSubmit}>
                        <input type="text" name="login" placeholder="username" onChange={this.handleChange} required/>
                        <input type="password" name="pass" placeholder="password" onChange={this.handleChange} required/>
                        <button type="submit">login</button>
                    </form>
                    <h3 className="msg">{this.state.userExists === false ? error : null}</h3>
                </div>

            </div>
        )
    }
}
Login.contextType = UserContext;
export default Login;