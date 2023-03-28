import React, {useState} from 'react'

function FunctionalFormValidationLessonTwo() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!name){
            setErrors({
                name : "Please fill in your name"
            })
        }
        if(!email){
            setErrors({
                email: "Pleas fill in your email address"
            })
        }
        if(!password){
            setErrors({
                password : "You have not filled in your password"
            })
        }
        console.log('Form is submitted')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
                {errors.name && <span>{errors.name}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                {errors.password && <span>{errors.password}</span>}
            </div>
            <button typ="submit">Submit</button>
        </form>
    </div>
  )
}

export default FunctionalFormValidationLessonTwo
