import React, {Component} from 'react'
import "../../css/test.css"
import '../../css/style.css'
import $ from 'jquery'


function createMarkup(str) {
    return {__html: str};
}
class NewLecture extends Component {
    constructor(props) {
        super();
        this.state = {
            lectures: []
        }
        this.jsonEscape = this.jsonEscape.bind(this);
        this.goBack = this.goBack.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    saveData() {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/save.js',
            data: JSON.stringify(this.state),
            dataType: 'json',
            success: function() {
                alert("ok")
            }
        });
    }

    goBack(e) {
        e.preventDefault();
        this.props.history.push('/lectures');
    }
    componentDidMount() {
        this.getData();
    }
    handleChange(e) {
        const target = e.target;
        this.setState({
          [target.name]: target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            lectures: this.state.lectures.concat({title: this.state.title, content: this.state.content, status: "new"})
        })
        console.log(this.state);
        this.saveData();
    }
    render() {
        return(
            <div className="lectures container">
            <div className="control-buttons back">
                <button onClick={this.goBack} className="back"><i className="material-icons">arrow_back_ios</i></button>
            </div>
                <div className="new-lecture">
                        <form className="lecture" onSubmit={this.handleSubmit} action="">
                            <input name="title" className="lecture-title" placeholder="Lecture title" onChange={this.handleChange} required></input>
                            <textarea name="content" className="lecture-content" placeholder="Lecture content" onChange={this.handleChange} required></textarea>
                            <button className="save" type="submit">Save</button>
                        </form>
                </div>
            </div>
        )
    }
}

export default NewLecture;