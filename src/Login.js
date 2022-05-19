import React, { useState }from 'react'
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase.js'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/');
            })
            .catch(error => alert(error.message));

    }

    const register = e => {
        e.preventDefault();
        //firebase 

        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                console.log(auth);
                if (auth) {
                    navigate('/');
                }
            })
            .catch(error => alert(error.message));
    }

  return (
      <div className='login'>
          <Link to='/'>
            <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
          </Link>

          <div className='login_container'>
              <h1>Sign-in</h1>
              <form>
                  <h5>Email</h5>
                  <input type='text' value={email} onChange={
                      e => setEmail(e.target.value)}/>

                  <h5>Password</h5>
                  <input type='password' value={password} onChange={
                      e => setPassword(e.target.value)} />
                  
                  <button className='login_signInButton' onClick={signIn} type='submit'>Sign in</button>
              </form>

              <p>
                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
              </p>

              <button className='login_registerButton' onClick={register} type='submit'>
                  Create your Amazon Account
              </button>
          </div>
      </div>
  )
}

export default Login