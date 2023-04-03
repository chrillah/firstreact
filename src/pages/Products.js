import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import {UserInfo} from '../UserInfo'

function Products() {
    const { id } = useParams()
    const msg = useContext(UserInfo)
    return (
        <div>
            <h1>Produkter</h1>
            <h4>
                Här kan du läsa om product <span>{id}</span>
            </h4>
            <h1>{msg}</h1>
        </div>
    )
}

export default Products
