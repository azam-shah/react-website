import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Signup.css';
import pic from "../images/Side Image (1).png";
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase';
import Footer from './Footer';

function Signup() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    Name: Yup.string().required('Name is required'),
    Email: Yup.string().email('Invalid email address').required('Email is required'),
    Password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      Name: '',
      Email: '',
      Password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, values.Email, values.Password);
        const user = userCredential.user;
        localStorage.setItem('authToken', user.accessToken);
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/Login');
      } catch (error) {
        console.error("Error during Signup:", error);
      }
    },
  });

  // Google Sign-In handler
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem('authToken', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/Login');
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
    }
  };

  return (
    <>
    <div className="signup-container">
      <div className="image-container">
        <img src={pic} alt='Side view' className="side-image" />
      </div>
      <div className='form-box'>
        <h1>Create an account</h1>
        <p>Enter your details below</p>
        <form onSubmit={formik.handleSubmit}>
          <div className='box1'>
            <input
              type='text'
              id='Name'
              name='Name'
              placeholder='Name'
              autoComplete='off'
              required
              {...formik.getFieldProps('Name')}
            />
            {formik.touched.Name && formik.errors.Name ? (
              <div className="error">{formik.errors.Name}</div>
            ) : null}
          </div>

          <div className='box1'>
            <input
              type='email'
              id='Email'
              name='Email'
              placeholder='Email'
              autoComplete='off'
              required
              {...formik.getFieldProps('Email')}
            />
            {formik.touched.Email && formik.errors.Email ? (
              <div className="error">{formik.errors.Email}</div>
            ) : null}
          </div>

          <div className='box1'>
            <input
              type='password'
              id='Password'
              name='Password'
              placeholder='Password'
              autoComplete='off'
              required
              {...formik.getFieldProps('Password')}
            />
            {formik.touched.Password && formik.errors.Password ? (
              <div className="error">{formik.errors.Password}</div>
            ) : null}
          </div>

          <button id='btn' type="submit">Create Account</button>
          <button 
            className="google-button" 
            type="button" 
            onClick={handleGoogleSignIn} // Add onClick handler
          >
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Icon" className='google-img' />
            Sign up with Google
          </button>

          <p className="login-text">
            Already have an account? <a href="/login">Log in</a>
          </p>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Signup;
