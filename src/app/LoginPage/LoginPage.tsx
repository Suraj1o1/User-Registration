"use client";
import Button from '@/Button/Button'
import RegistrationForm from '@/RegistrationForm/RegistrationForm';
import Link from 'next/link';
import React, { use, useState } from 'react'
const LoginPage = () => {
const [Username,setUsername]=useState('')
const [Password,setPassword]=useState('')
const [Error,setError]=useState('')
const handleSignin=(e:any)=>{
    e.preventDefault();
    if(!Username || !Password){
        setError("!!Please fill all the required field to continiue!!")
    }else if(Password.length<6 && Password.length>0){
        setError("Password must contain at least 6 character")
    }else{
        alert("Login successfull")
    }
    

}
const gotoSignupPage=()=>{
    return <RegistrationForm/>
}

  return (
    <div className='bg-black w-full h-screen flex flex-col flex-wrap content-center justify-center items-center '>
        <div className= 'bg-zinc-900 text-green-50 flex flex-col content-center items-center px-6 py-6 rounded-xl'>
                    <h1 className='text-green-500'>Welcome To The Login Page</h1>
                    <img className='rounded-lg mt-2' src="./images/image.png" alt="" width={70} height={70} />

                    <form className='max-w-sm mx-auto '>
                    <div className=''>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor="Username">Username</label>
                    <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" value={Username}  id="Username" placeholder='Enter your email / username' onChange={(e)=>setUsername(e.target.value)}  />
                    </div>
                    <div className='mt-2'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor="password">Password</label>
                        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id='password' value={Password} placeholder='Enter your password here' minLength={6} type="password" onChange={(e)=>setPassword(e.target.value) } />

                    </div>
                    
                    <Button spanClassname='' classname="text-white bg-blue-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mb-3 text-center dark:bg-green-600 dark:hover:opacity-50 dark:focus:ring-green-800 mt-3" name='Log in' onClick={handleSignin} />
                    <h1 className='block mb-2 text-sm font-medium text-gray-900 dark:text-orange-600'>Don't Have an Account?</h1>
                    <h2 className='block mb-2 text-sm font-medium text-gray-900 dark:text-blue-600'>Please Sign up</h2>
                   <Link href="/RegistrationForm" ><Button
                    onClick={gotoSignupPage}
                    name="Sign Up"
                    classname="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mb-3 text-center dark:bg-blue-600 dark:hover:opacity-50 dark:focus:ring-blue-800 mt-1"
                    spanClassname=""
                     /></Link> 

                    <h2 className='text-red-400'>{Error}</h2>
                    </form>

                    
        </div>
    </div>
  )
}

export default LoginPage
