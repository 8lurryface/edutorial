import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../../assets/UserContext'
import '../../css/menu2.css'

class Menu extends Component {
    constructor(props) {
        super();
        this.logout = this.logout.bind(this);

    }

    logout() {
        this.parentLogout();
        this.props.history.push({
            pathname: "/"
        })
    }

    render() {
        return(
            <React.Fragment>
            <input type="checkbox" id="menu" defaultChecked />
                <label htmlFor="menu" className="menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <nav className="nav">
                    <ul>
                        <li><Link to="/lectures">Lectures</Link></li>
                        <li><Link to="/tests">Tests</Link></li>
                        {this.context.user === "admin" ? <li><Link to="/users">Users</Link></li> : null }
                        <li className="logout" onClick={this.context.logout}><a>Log out</a></li>
                    </ul>
                </nav>
                </React.Fragment>
        )
    }
}
Menu.contextType = UserContext;
export default Menu;