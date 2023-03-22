import {Component} from 'react'

class StateCounterClass extends Component{

    constructor(){
        super()
        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this)
    }

    increment(){
        console.log(this)

        this.setState({
            counter : this.state.counter + 1
        })
    }

    render(){
        return(
            <div>
                <h4>I denna komponent anävnder vi setState i en klasskomponent</h4>
                <button onClick={()=>{this.increment()}}>{this.state.counter}</button>
            </div>
        )
    }
}

export default StateCounterClass
