import React, {useState} from 'react'
import styled from 'styled-components'

function FunctionalStyledComponentLessonFour() {

    const [color, setColor] = useState('black')

    function changeColor(){
        setColor(color === 'black' ? 'red' : 'black')
    }

    // function testFunction(){
    //     return alert('Hej')
    // }
    // function testFunction2(){
    //     return alert('Allihopa')
    // }
    return <div>
        <Wrap>
            <h1 className='text'>StyledComponent</h1>
        </Wrap>
        <ButtonLeft color={color} onClick={changeColor}>Hej</ButtonLeft>
        <ButtonRight color={color} onClick={changeColor}>Allihopa</ButtonRight>
    </div>

}

export default FunctionalStyledComponentLessonFour

const Wrap = styled.div`
background-color: black;
color: white;

.text {
color: red;
}
`

const ButtonLeft = styled.button`
margin: 2rem;
padding: 2rem;
background: transparent;
border-radius: 3px;
color : ${props => props.color};
border: 2px solid red;
`
const ButtonRight = styled(ButtonLeft)`
color: black;color : ${props => props.color};
border: 2px solid black;
`
