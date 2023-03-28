import React, {useState} from 'react'

function FunctionalFormHandlerLessonOne() {

    const [name, setName] = useState('')

    function handleSubmit(event){
        event.preventDefault()
        alert(`Hej ${name}`)
    }
    function handleChange(event){
        setName(event.target.value)
    }
  return (
    <form onSubmit={handleSubmit}>
        <label>Name:
            <input type="text" value={name} onChange={handleChange} />
        </label>
        <button type="Submit">Submit</button>
    </form>
  )
}

export default FunctionalFormHandlerLessonOne
