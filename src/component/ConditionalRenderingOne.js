function ConditionalRenderingOne(){
    const age = 16
    return(
       <> {age > 17 && <div>Visas</div>}</>
    )
}

export default ConditionalRenderingOne
