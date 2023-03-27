function ConditionalRenderingTwo(){
    const age=16
    return(
        <>{age > 17? <h1>Oldie</h1> : <h1>Youngling</h1>}</>
    )
}

export default ConditionalRenderingTwo
