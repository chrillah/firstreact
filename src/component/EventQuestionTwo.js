import { useState } from 'react'

function EventQuestionTwo() {
    const [count, setCount] = useState(100)

    function decrease(){
        setCount(count - 1)
    }

    return (
        <div>
            <h4 className="question">
                Fråga 2: En functional component som räknar ner med varje knapptryck
            </h4>
            <button onClick={()=>decrease()}>
                {count}
            </button>
        </div>
    )
}

export default EventQuestionTwo
