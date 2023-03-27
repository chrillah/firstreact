import React from 'react'

function FunctionalListRenderingLessonTwo() {
    const names = ['Iron Man', 'Spider-Man', 'Ant-Man', 'Black Panther','Thanos']
    const nameList = names.map((name)=><h1>{name}</h1>)
  return (
    <div>{nameList}</div>
  )
}

export default FunctionalListRenderingLessonTwo
