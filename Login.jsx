import React from 'react';
 import "./Login.css";
 import {Link} from "react-router-dom";


const Login = () => {
  return (
    <div className='addUser'>
        <h3>Sign in</h3>
        <form className='addUserForm'>
            <div className='inpGroup'>
            
                <p>email:</p>
                <input 
                type="email"
                id='email'
                autoComplete='off'
                placeholder='Enter your Email'
                 />
                <p>password:</p>
                <input 
                type="password"
                id='password'
                autoComplete='off'
                placeholder='Enter your password'
                 />
                 <button type="submit" class="btn btn-primary">Login</button>

            </div>
        </form>
        <div className='login'>
            <p>Already have an account ?</p>
            <Link to="/" type="submit" class="btn btn-success">Sign up</Link>

        </div>

    </div>
  )
}

export default Login;
