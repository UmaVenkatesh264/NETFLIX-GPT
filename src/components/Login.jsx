import React, { useRef, useState } from 'react';
import Header from './Header';
import { validateData } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const numberRef = useRef(null);
  const nameRef = useRef(null);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null); // Reset error message when toggling forms
  };

  const handleClick = () => {
    const emailValue = emailRef.current?.value || "";
    const passwordValue = passwordRef.current?.value || "";
    const numberValue = isSignInForm ? "" : numberRef.current?.value || "";
    const nameValue = isSignInForm ? "" : nameRef.current?.value || "";

    const message = validateData(emailValue, passwordValue, numberValue, nameValue);
    setErrorMessage(message);
    if(message) return;

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        setErrorMessage(errorCode + " - " + errorMessage)
      });    
    }
    else{
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " - " + errorMessage)
      });
    }
  };

  return (
    <>
      <Header />
      <div className="fixed inset-0 w-full h-full">
        <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_medium.jpg" 
          alt="bg-image" 
          className="w-full h-full object-cover"
        />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className={`w-3/12 absolute p-8 bg-black text-white ${isSignInForm ? "my-36" : "my-10"} mx-auto right-0 left-0 rounded-lg opacity-90`}>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        
        {!isSignInForm && (
          <>
            <input ref={nameRef} type='text' placeholder='Full name' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
            <input ref={emailRef} type='text' placeholder='Email' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
            <input ref={numberRef} type='number' placeholder='Mobile Number' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
            <input ref={passwordRef} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
          </>
        )}
        
        {isSignInForm && (
          <>
            <input ref={emailRef} type='text' placeholder='Email or mobile number' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
            <input ref={passwordRef} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
          </>
        )}

        
        
        {/* Display error messages */}
        {errorMessage && <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>}
        
        <button className='p-4 my-4 bg-red-700 w-full rounded-lg cursor-pointer' onClick={handleClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        
        <p className='p-4'>
          {isSignInForm ? "New to Netflix? " : "Already have an account? "} 
          <span className="text-red-500 cursor-pointer" onClick={toggleForm}>
            {isSignInForm ? "Sign up now" : "Sign in"}
          </span>
        </p>
      </form>
    </>
  );
}

export default Login;
