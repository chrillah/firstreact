// skriver rent js-kod här

const hello = 'Detta kommer från en variabel'

const displayMessage = () => {
    return 'Detta kommer från en funktion'
}

// Namnge
function Functional() {
    return (
        <>
            <h1 className="title">{hello + ' ' + displayMessage()}</h1>
        </>
    )
}

// samma namn som i funktionen
export default Functional
