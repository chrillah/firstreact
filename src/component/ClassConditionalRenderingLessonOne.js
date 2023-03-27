import React, { Component } from 'react'

class ClassConditionalRenderingLessonOne extends Component {
    constructor(props) {
        super(props)

        // class states
        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        if(this.state.isLoggedIn){
            return <div><h2>Välkommen Christopher</h2></div>
        } else{
            return <div><h2>Välkommen Häst</h2></div>
        }
        // return this.state.isLoggedIn ? <div><h2>Välkommen Christopher</h2></div> : <div><h2>Välkommen Häst</h2></div>
    }
}

export default ClassConditionalRenderingLessonOne
