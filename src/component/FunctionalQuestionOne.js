function FunctionalQuestionOne(props){
    return(
        <div className="question">
            <h4>Fråga 1: Mitt namn i en props, i en functional component:</h4>
            <p>{props.myName}</p>
        </div>
    )
}

export default FunctionalQuestionOne
