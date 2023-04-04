import React from 'react'
import {Link} from 'react-router-dom'

// interface HomeProps {
//     firstName : string,
//     counter : number
// }

function Home(props) {
  return (
    <div>
        <h1>Välkommen till vår e-shop</h1>
        <h2>{props.firstName}</h2>
        <h3>{props.counter}</h3>
        <p>Nyfiken? Kika på någon av våra produkter: </p>
        <Link to="/products/1" >Product 1</Link>
        <Link to="/products/2" >Product 2</Link>
    </div>
  )
}

export default Home
