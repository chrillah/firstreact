import { Component } from "react";

class ClassComponentProps extends Component {
    render(){
        return <h4>Detta kommer från en klass {this.props.text}</h4>
    }
}

export default ClassComponentProps
