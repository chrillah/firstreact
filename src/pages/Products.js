import React from 'react'
import { useParams } from 'react-router-dom'

function Products() {
    const { id } = useParams()
    return (
        <div>
            <h1>Produkter</h1>
            <h4>
                Här kan du läsa om product <span>{id}</span>
            </h4>
        </div>
    )
}

export default Products
