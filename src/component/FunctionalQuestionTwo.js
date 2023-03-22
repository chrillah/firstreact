function FunctionalQuestionTwo(props){
    return(
        <div className="question">
            <h4>Hämtar två stycken props</h4>
            <p>{props.firstName}</p>
            <p>{props.surName}</p>
        </div>
    )
}

export default FunctionalQuestionTwo
