import { Component } from "react";

class ClassQuestionTwo extends Component{
    render(){
        return(
            <div className="question">
                <h4>Samma sak som functional fast med class, två stycken props</h4>
                <p>{this.props.firstName}</p>
                <p>{this.props.surName}</p>
            </div>
        )
    }
}

export default ClassQuestionTwo
