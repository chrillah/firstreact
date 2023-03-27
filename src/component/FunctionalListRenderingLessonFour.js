import React, { useState, useEffect } from 'react'

function FunctionalListRenderingLessonFour() {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('data.json',{
            headers : {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        })
        .then(response =>response.json())
        .then(data => setData(data))
    }, [])
    return <div>
        <ul>
            {data.map(item => (
                <li key={item.id}>{item.firstname} {item.lastname}</li>
            ))}
        </ul>
    </div>
}

export default FunctionalListRenderingLessonFour
