import React from 'react';
 import "./Signup.css";
 import {Link} from "react-router-dom";

const Signup = () => {
  return (
    <div className='addUser'>
        <h3>Sign up</h3>
        <form className='addUserForm'>
            <div className='inpGroup'>
            <p>Name:</p>
                <input 
                type="text"
                id='name'
                autoComplete='off'
                placeholder='Enter your name'
                 />
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
                 <button type="submit" class="btn btn-success">Sign up</button>

            </div>
        </form>
        <div className='login'>
            <p>Don't have Account ? account ?</p>
            <Link to="/login" type="submit" class="btn btn-primary">Login</Link>

        </div>

    </div>
  )
}

export default Signup;
