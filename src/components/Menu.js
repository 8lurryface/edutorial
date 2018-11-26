import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import '../css/menu.css'
/*
function Login (props) {
    return(
        <Link to="/login">Log in</Link>
    )
}

function Logout (props) {
    return(
        <Link to="/">Log out</Link>
    )
}
*/
class Menu extends Component {
    render() {
        return(
            <React.Fragment>

            <div id="cont">
                <div id="menu-fixed">
                <a href="#cont">
                    <i  className="material-icons back">arrow_back_ios</i>
                </a>
                <a href="#menu-fixed">
                    <div  className="logo">
                    <span></span>   
                    <p>ADMIN</p>
                    </div>
                    <p  className="pmenu">MENU</p>
                </a>
                <hr/>
                <ul  className="menu">
                    <li><Link to="/"><i  className="material-icons">home</i></Link><p>Home</p></li>
                    <li><Link to="/lectures"><i  className="material-icons">note</i></Link><p>Lectures</p></li>
                    <li><Link to="/tests"><i  className="material-icons">speaker_notes</i><p>Tests</p></Link></li>
                    <li><i  className="material-icons">settings</i><p>Log out</p></li>
                </ul>
                <i  className="material-icons info">info</i>
                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Menu;