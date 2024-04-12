import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Signup = () => {
  const [visible,setVisible]=useState(false);
  const [confirm,setConfirm]=useState(false);
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors,isSubmitting },
  } = useForm()

  const submitData=(data)=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve();
    },1000)
  })
  }
const onSubmit =async (data) =>{ 
console.log(data.Password===data.ConfirmPassword)
if(data.Password===data.ConfirmPassword)
{
  await submitData(data);
  console.log(data)
}
else
{
  setError("match",{message:"Password doesnot match"})
}
};

  return (
    <div className='ContLoginAndSignup'>
       <Link to='/LoginSignup/'> <div className='absolute top-5 right-5 border-black border p-1 px-4 rounded-3xl'>
        <button>Login</button>
      </div>
      </Link>
       <div className='w-full flex flex-col justify-center items-center mb-[5vw]'>
        <div className='text-4xl font-semibold welcomeLS'>
          Welcome to JioSaavn.
        </div>
        <div className='welcomeLS'>
          Log in or sign up with your email address.
        </div>
      </div>
      <div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center gap-[1.5vh]'>
      <input className='inp w-[400px] h-[50px] border' placeholder='Email Address' {...register("email",{required:{value:true,message:"This field is required"},minLength:{value:11,message:"Invalid Email name"}})} />
      <div className='text-red-500 text-sm'>{errors.email &&errors.email.message }</div>
      <div className='inp w-[400px] h-[50px] border relative'><input className='inp w-[400px] h-[50px]' placeholder='password' {...register("Password",{ required:{value:true,message:"This field is required"},minLength:{value:8,message:"Enter longer password"},pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/,message:"Generate a strong password"},} )} type={visible?"text":"password"} />{visible?<FaEye className='absolute top-4 right-4'  onClick={()=>setVisible(!visible)}/>:<FaEyeSlash className='absolute top-4 right-4' onClick={()=>setVisible(!visible)}/>}</div>
      <div className='text-red-500 text-sm'>{errors.Password &&errors.Password.message }</div>
      <div className='inp w-[400px] h-[50px] border relative'><input className='inp w-[400px] h-[50px]' placeholder='Confirm password' {...register("ConfirmPassword",{ required:{value:true,message:"This field is required"},minLength:{value:8,message:"Enter longer password"},pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/,message:"Generate a strong password"},} )} type={confirm?"text":"password"} />{confirm?<FaEye className='absolute top-4 right-4'  onClick={()=>setConfirm(!confirm)}/>:<FaEyeSlash className='absolute top-4 right-4' onClick={()=>setConfirm(!confirm)}/>}</div>
      <div className='text-red-500 text-sm'>{errors.ConfirmPassword &&errors.ConfirmPassword.message }</div>
      <input type="submit" className='inp w-[400px] h-[50px] sub' disabled={isSubmitting} onClick={()=>clearErrors("match")} />
      <div className='flex justify-center w-full text-red-300'>{errors.match&&errors.match.message}</div>  
    </form>
      </div>
    </div>
  )
}

export default Signup
