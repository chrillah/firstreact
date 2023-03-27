import React from 'react'

function FunctionalListRenderingLessonOne() {
    const names = ['Christopher', 'Elliott', 'Linda', 'Malin']
    return (
        <div>
            {names.map((name)=>(<h2>{name}</h2>))}
        </div>
    )
}

export default FunctionalListRenderingLessonOne
