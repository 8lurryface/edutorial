import React, {Component} from 'react'
import "../../css/test.css"
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
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.history.push({
            pathname: "/lectures"
        })
    }
    render() {
        return(
            <React.Fragment>
            <button onClick={this.goBack} className="lecture-back"><i className="material-icons">arrow_back_ios</i></button>
            <div className="lecture container lecture-container">
                <div className="lecture-number">
                    Lecture #{this.props.location.state.lectureNumber}
                </div>
                <h2 className="lecture-title">{this.props.location.state.lectureTitle}</h2>
                <div className="lecture-content" dangerouslySetInnerHTML={createMarkup(this.props.location.state.lectureContent)}></div>
            </div>
            </React.Fragment>
        )
    }
}

export default Lecture;