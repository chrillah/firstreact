import React, {useContext} from 'react'
import {UserInfo} from '../UserInfo'

function About() {
    const msg = useContext(UserInfo)
  return (
    <div>
        <h1>{msg}</h1>
        <div>About</div>
    </div>
  )
}

export default About
