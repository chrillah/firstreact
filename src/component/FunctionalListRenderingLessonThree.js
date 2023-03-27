import React from 'react'

function FunctionalListRenderingLessonThree() {
    const persons = [
        {
            id : 1,
            name : 'Christopher',
            age : 37,
            skill : 'Dance'
        },
        {
            id : 2,
            name : 'Joshua',
            age : 16,
            skill : 'Playstation'
        },
        {
            id : 3,
            name : 'Almando',
            age : 22,
            skill : 'Movies'
        },
    ]
    const personList = persons.map((person)=>(
    <h2 key={person.id}>My name is {person.name} and my age is {person.age} and I like {person.skill}</h2>
    ))
  return (
    <div>{personList}</div>
  )
}

export default FunctionalListRenderingLessonThree
