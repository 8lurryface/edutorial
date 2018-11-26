import React, {Component} from 'react'
import "../test.css"
import $ from 'jquery'


function createMarkup(str) {
    return {__html: str};
  }
class Lecture extends Component {
    constructor(props) {
        super();
        this.state = {
            lectureNumber: undefined,
            lectureTitle: "",
            lectureContent: ""
        }
        this.jsonEscape = this.jsonEscape.bind(this);
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
                    lectureNumber: 1,
                    lectureTitle: parsed_json.lectures[0].title,
                    lectureContent: this.jsonEscape(parsed_json.lectures[0].content)
                });
            }.bind(this)
        });
    }

    componentDidMount() {
        this.getData();
    }
    render() {
        return(
            <div className="lecture container">
                <div className="lecture-number">
                    Lecture #{this.state.lectureNumber}
                </div>
                <h2 className="lecture-title">{this.state.lectureTitle}</h2>
                <div className="lecture-content" dangerouslySetInnerHTML={createMarkup(this.state.lectureContent)}></div>
            </div>
        )
    }
}

export default Lecture;