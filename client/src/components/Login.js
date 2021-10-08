import React from 'react'
import { loginUrl } from '../utilities/Spotify'
import logo from '../icons/logo.PNG';

import './Login.css'


function Login() {
    return (
        <div className='login'>
            <img  src = {logo} alt=''  />
            <a href= {loginUrl}>LOGIN WITH SPORTIFY</a>
        </div>
    )
}

export default Login
