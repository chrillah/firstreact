import {useState} from 'react'

// es6-function
const StateCounterFunction= () =>{
    const [count, setCount] = useState(0)

    return(
        <div>
            <h4>I denna funktionella komponent, använder vi useState</h4>
            <button onClick={()=>setCount(count + 1)}>{count}</button>
        </div>
    )
}

export default StateCounterFunction
