import React, {Component} from 'react'
import "../../css/test.css"
import '../../css/style.css'
import $ from 'jquery'
import {BrowserRouter as Link} from 'react-router-dom'
import {UserContext} from '../../assets/UserContext'
import Menu from '../_menu/Menu'

function createMarkup(str) {
    return {__html: str};
}
class LectureList extends Component {
    constructor(props) {
        super();
        this.state = {
            lectures: []
        }
        this.jsonEscape = this.jsonEscape.bind(this);
        this.createNewLecture = this.createNewLecture.bind(this);
        this.readLecture = this.readLecture.bind(this);
    }

    jsonEscape(str)  {
        return str.replace(/\n/g, "<br/>");
    }
    
    getData() {
        $.ajax({
            url: "../../lectures.json",
            type: 'GET',
            dataType: 'json',
            success: function(parsed_json){
                console.log(parsed_json);
                this.setState({
                    lectures: parsed_json.lectures
                });
            }.bind(this)
        });
    }

    componentDidMount() {
        this.getData();
    }
    createNewLecture() {
        this.props.history.push({
            pathname: "/lectures/add"
        })
    }
    readLecture(id) {
        console.log(this.state.lectures[id-1].title);
        this.props.history.push({
            pathname: "/lectures/read",
            state: {
                lectureNumber: id,
                lectureTitle: this.state.lectures[id-1].title,
                lectureContent: this.state.lectures[id-1].content
            }
        })
    }
    render() {
        const self = this;
        const lectureTitles = this.state.lectures.map(function(prop, i) {
             return (
                        <Link key={i} to={"/lectures/:"+prop.id}>
                            <tr key={i} className={"lecture-status " + prop.status}>
                                <td className="lecture-title">{prop.title}</td>
                                <td className={"lecture-status " + prop.status}>{prop.status}</td>
                                <td className="delete">
                                    <button className="read" onClick={() => self.readLecture(prop.id)}><i className="material-icons">reorder</i></button>
                                    {self.context.user === "admin" ? <button className="delete"><i className="material-icons">delete</i></button> : null}
                                </td>
                            </tr>
                        </Link>
            )
        })
        return(
            <React.Fragment>
            <div className="lectures container">
            <div className="control-buttons">
                {
                    this.context.user === "admin" 
                    ? <button onClick={this.createNewLecture} className="add"><i className="material-icons">add_box</i></button> 
                    : null
                }
            </div>
                <div className="lectures-list">
                        <table>
                            <tbody>
                                {lectureTitles}
                            </tbody>
                        </table>
                </div>
            </div>
            </React.Fragment>
        )
    }
}
LectureList.contextType = UserContext;
export default LectureList;