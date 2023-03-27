import React, {useState, useEffect} from 'react'

export default function FunctionalListRenderingCities() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://avancera.app/cities',{
            headers : {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        }).then(response => response.json()).then(data => setData(data))
    }, [])
  return (
    <div>
        <ul className="question">
            {data.map(item => (
                <li key={item.id}>{item.name} {item.population}</li>
            ))}
        </ul>
    </div>
  )
}
