import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Login.css'; 
import pic from "../images/Side Image (1).png";
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import Footer from './Footer';

function Login() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    emailOrPhone: Yup.string().required('Email or Phone Number is required'),
    Password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      emailOrPhone: '',
      Password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, values.emailOrPhone, values.Password);
        const user = userCredential.user;
        localStorage.setItem('authToken', user.accessToken);
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/home'); 
        window.location.reload();
      } catch (error) {
        console.error("Error during Login:", error);
      }
    },
  });

  return (
    <>
    <div className="login-container">
      <div className="image-container">
        <img src={pic} alt='Side view' className="side-image" />
      </div>
      <div className='form-box'>
        <h1>Log in to Exclusive</h1>
        <p>Enter your details below</p>
        <form onSubmit={formik.handleSubmit}>
          <div className='box1'>
            <input
              type='text'
              id='emailOrPhone'
              name='emailOrPhone'
              placeholder='Email or Phone Number'
              autoComplete='off'
              required
              {...formik.getFieldProps('emailOrPhone')}
            />
            {formik.touched.emailOrPhone && formik.errors.emailOrPhone ? (
              <div className="error">{formik.errors.emailOrPhone}</div>
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

          <div className='btn-box'>
            <button id='btn2' className='login-button' type="submit">Log In</button>
            <p className="forgot-password">
              <a href="/forgot-password">Forget Password?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Login;
