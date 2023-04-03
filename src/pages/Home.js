import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>Välkommen till vår e-shop</h1>
        <p>Nyfiken? Kika på någon av våra produkter: </p>
        <Link to="/products/1" >Product 1</Link>
        <Link to="/products/2" >Product 2</Link>
    </div>
  )
}

export default Home
