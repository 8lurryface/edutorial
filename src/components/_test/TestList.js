import React, {Component} from 'react'
import "../../css/test.css"
import '../../css/style.css'
import $ from 'jquery'
import {BrowserRouter as Link} from 'react-router-dom'
import {UserContext} from '../../assets/UserContext'

function createMarkup(str) {
    return {__html: str};
}
class TestList extends Component {
    constructor(props) {
        super();
        this.state = {
            tests: []
        }
        this.jsonEscape = this.jsonEscape.bind(this);
        this.createNewTest = this.createNewTest.bind(this);
        this.takeTest = this.takeTest.bind(this);
    }

    jsonEscape(str)  {
        return str.replace(/\n/g, "<br/>");
    }
    
    getData() {
        $.ajax({
            url: "../../tests.json",
            type: 'GET',
            dataType: 'json',
            success: function(parsed_json){
                console.log(parsed_json.tests);
                this.setState({
                    tests: parsed_json.tests
                });
            }.bind(this)
        });
    }

    componentDidMount() {
        this.getData();
        console.log(this.state);
    }
    createNewTest() {
        this.props.history.push({
            pathname: "/tests/add"
        })
    }
    takeTest(id) {
        //console.log(this.state.tests[id-1].title);
        this.props.history.push({
            pathname: "/tests/take",
            state: {
                testNumber: id,
                testTitle: this.state.tests[id].title,
                testContent: this.state.tests[id].content
            }
        })
    }
    render() {
        const self = this;
        console.log(this.state.tests);
        const testTitles = this.state.tests.map(function(prop, i) {
             return (
                        <Link key={i} to={"/lectures/:"+prop.id}>
                            <tr key={i} className={"lecture-status " + prop.status}>
                                <td className="lecture-title">{prop.title}</td>
                                <td className={"lecture-status " + prop.status}>{prop.status}</td>
                                <td className="delete">
                                    <button className="read" onClick={() => self.takeTest(i)}><i className="material-icons">reorder</i></button>
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
                    ? <button onClick={this.createNewTest} className="add"><i className="material-icons">add_box</i></button> 
                    : null
                }
            </div>
                <div className="lectures-list">
                        <table>
                            <tbody>
                                {testTitles}
                            </tbody>
                        </table>
                </div>
            </div>
            </React.Fragment>
        )
    }
}
TestList.contextType = UserContext;
export default TestList;