import React, { useState } from 'react'
import './Login.css'
import Button from '../../../components/Button/Button'

const Login = () => {
    const [userFields, setUserFields] = useState({
        email: "",
        password: "",
        username: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserFields(prevState =>({
            ...prevState,
            [name]: value
        }))
    }
    const handleSubmit = () => {
        // Send data to backend
        console.log(`Email: ${userFields.email}, Password: ${userFields.password}, Username: ${userFields.username} `);
        setUserFields({
            email:"",
            password:"",
            username:""
        })
    }
  return (
    <section className='login'>
      <form className="login-card">
        <input type="email" name='email' placeholder='Email' onChange={(e) => handleChange(e)} value={userFields.email} />
        <input type="text" name='username' placeholder='Username'onChange={(e) => handleChange(e)} value={userFields.username} />
        <input type="password" name='password' placeholder='Password' onChange={(e) => handleChange(e)} value={userFields.password} />
        <Button variant="outline" onClick={e => handleSubmit(e)} className='login-btn' >Login</Button>
      </form>
    </section>
  )
}

export default Login
