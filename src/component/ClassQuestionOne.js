import {Component} from 'react'

class ClassQuestionOne extends Component{
    render(){
        return(
            <div className='question'>
                <h4>Samma sak som functional fast med class</h4>
                <p>{this.props.myName}</p>
            </div>
        )
    }
}

export default ClassQuestionOne
