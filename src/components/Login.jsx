import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleForm = () =>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_medium.jpg' alt='bg-image'/>
      </div>
      <form className='w-3/12 absolute p-8 bg-black text-white my-36 mx-auto right-0 left-0 rounded-lg opacity-90'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type='text' placeholder='Full name' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>}
        {!isSignInForm && <input type='text' placeholder='Email' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>}
        {!isSignInForm && <input type='number' placeholder='Mobile Number' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>}
        {isSignInForm && <input type='text' placeholder='Email or mobile number' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>}
        <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
        <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='p-4'>{isSignInForm ? "New to Netflix?" : "Already have an account"} <span className="text-red-400 cursor-pointer" onClick={toggleForm}>{isSignInForm? "Sign up now" : "Sign in"}</span></p>
      </form>
    </>
  )
}

export default Login