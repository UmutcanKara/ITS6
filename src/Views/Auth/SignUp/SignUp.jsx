import React, {useState} from 'react'
import Button from '../../../components/Button/Button'

const SignUp = () => {
    const [userFields, setUserFields] = useState({
        email: "",
        password: "",
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
        console.log(`Email: ${userFields.email}, Password: ${userFields.password}`);
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
        <input type="password" name='password' placeholder='Password' onChange={(e) => handleChange(e)} value={userFields.password} />
        <Button variant="outline" onClick={e => handleSubmit(e)} className='login-btn' >Sign Up</Button>
      </form>
    </section>
  )
}

export default SignUp
