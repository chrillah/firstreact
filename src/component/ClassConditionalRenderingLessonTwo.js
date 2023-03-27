import React, { Component } from 'react'

class ClassConditionalRenderingLessonTwo extends Component {
    constructor(props) {
      super(props)

      this.state = {
        isLoggedIn : true
      }
    }
  render() {
    let message
    if(this.state.isLoggedIn){
        message = <div><h2>Välkommen Christopher</h2></div>
    } else{
        message = <div><h2>Välkommen Häst</h2></div>
    }
    return <div>{message}</div>
  }
}

export default ClassConditionalRenderingLessonTwo
