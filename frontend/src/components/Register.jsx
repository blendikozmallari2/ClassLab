import React from 'react'
import {useState} from 'react'
import {FaPray, FaUser} from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { setUser } from '../store/slices/userSlice';
import { useRegisterMutation } from '../store/apis/userApi';


const Register = () => {
  const  [formData, setFormData] = useState({name: '', email: '', password: '', password2: ''})
  const  {name, email, password, password2}= formData;

  const handleChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error('Passwords are different')
    } else {
      const response = await register(formData);
      if (response.error) {
        toast.error(response.error.data?.message || response.error.error || 'Registration failed');
      } else {
        dispatch(setUser(response.data));
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate('/login');
        toast.success('Registration successful!');
      }
    }
  }


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register, { isLoading }] = useRegisterMutation();




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
            <button type='submit' className='btn btn-block'disabled={isLoading}>{isLoading ? "Please Wait..." : "Register"}</button>
          </div>
          


        </form>
      </section>
    </>
  )
}

export default Register