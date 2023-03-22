function EvenQuestionOne() {
    return (
        <div>
            <h4 className="question">
                Fråga 1: En functional component som loggar ett "hej", varje
                gång man trycker på knappen
            </h4>
            <button onClick={() => console.log('hej')}>
                Klicka så får du ett hej i konsolen
            </button>
        </div>
    )
}

export default EvenQuestionOne
