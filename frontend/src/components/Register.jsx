import React from 'react'
import {useState} from 'react'
import {FaPray, FaUser} from 'react-icons/fa'

const Register = () => {
  const  [formData, setFormData] = useState({name: '', email: '', password: '', password2: ''})
  const  {name, email, password, password2}= formData;

  const handleChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <>
      <section className='heading'>
        <h1><FaUser/>Register</h1>
        <p>Please create an account</p>
      </section>
      
      <section className='heading'>
        <form onSubmit={handleSubmit}>

          <div className='form-group'>
            <input type='text' className='formControl' name='name' value={name} placeholder='Enter your name' onChange={handleChange}/>
          </div>

          <div className='form-group'>
            <input type='email' className='formControl' name='email' value={email} placeholder='Enter your email' onChange={handleChange}/>
          </div>

          <div className='form-group'>
            <input type='password' className='formControl' name='password' value={password} placeholder='Enter password' onChange={handleChange}/>
          </div>

          <div className='form-group'>
            <input type='password' className='formControl' name='password2' value={password2} placeholder='Confirm password' onChange={handleChange}/>
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-block'>Submit</button>
          </div>

        </form>
      </section>
    </>
  )
}

export default Register