'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(window.localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setIsLoggedIn(true);
      setError(false);
      // Clear input fields
      setEmail('');
      setPassword('');
    } else {
      setError(true);
    }
  };

  return (
    <div className='login'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {error && <p className='error-para'>Email or password is invalid</p>}
        <div className='email-div'>
          <label htmlFor='email'>Email: </label>
          <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='password-div'>
          <label htmlFor='password'>Password: </label>
          <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type='submit' className='login-btn'>
          Log In
        </button>
      </form>
      {isLoggedIn && (
        <div>
          <Link href='/store'>
            <button className='store-link'>Go to Store</button>
          </Link>
        </div>
      )}
      <div>
        Don't have an account?
        <Link href='/register'>
          <button className='register-link'>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
