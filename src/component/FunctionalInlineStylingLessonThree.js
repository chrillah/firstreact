import React from 'react'

function FunctionalInlineStylingLessonThree() {
    const heading = {
        fontSize : '72px',
        color : 'red'
    }
  return (
    <div>
        <h1 style={heading}>Inline Styling</h1>
        <p className='blue'>Jag är stylad på vanligt vis</p>
    </div>
  )
}

export default FunctionalInlineStylingLessonThree
