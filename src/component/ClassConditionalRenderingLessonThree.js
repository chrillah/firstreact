import React, { Component } from 'react'

class ClassConditionalRenderingLessonThree extends Component {
    constructor(props) {
      super(props)

      this.state = {
         isLoggedIn : true
      }
    }
  render() {
    return (
        this.state.isLoggedIn ? (
            <div><h2>Välkommen Christopher</h2></div>
        ) : (
            <div><h2>Välkommen Häst</h2></div>
        )
    )
  }
}

export default ClassConditionalRenderingLessonThree
