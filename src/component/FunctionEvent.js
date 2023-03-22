import React from 'react'

function FunctionEvent(){
    function clickEvent(){
        console.log('klick')
    }

    return(
        <button onClick={clickEvent}>Klick</button>
    )
}

export default FunctionEvent
