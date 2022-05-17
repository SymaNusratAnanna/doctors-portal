import React, { useEffect } from 'react';
import {useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser,gLoading, gError] = useSignInWithGoogle(auth);
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    useEffect(()=>{

      if (user|| gUser){
        navigate(from,{ replace: true});
      }

    },[user,gUser, from ,navigate])

    if( loading || gLoading){
      return <button className="btn loading">loading</button>

    }
    if(error|| gError)
    {
      signInError=<p className='text-red-500'><span>{error?.message || gError?.message}</span></p>
    }
    
    const onSubmit = data => { 
        console.log(data);
      signInWithEmailAndPassword(data.email,data.password);}
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 class= 'text-center text-2xl font-bold'>Login</h2>


    
  </div>

  <form onSubmit={handleSubmit(onSubmit)}>
  <div className="form-control w-full max-w-xs">
  
  <label className="label">
    <span className="label-text">What is your email?</span>
 
  </label>
  <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" 
  {...register("email",{
    required: {
      value: true,
      message: 'Email is Required'
    },
  
    pattern: {
      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,

    message: 'Provide a valid email'

}
 })} 
 />
  <label className="label">
  {errors.email?.type === 'required' &&   <span className="label-text-alt text-red-500">{errors.email.message}</span>}
  {errors.email?.type === 'pattern' &&   <span className="label-text-alt text-red-500">{errors.email.message}</span>}
   
  
  </label>
</div>
<div className="form-control w-full max-w-xs">
  
  <label className="label">
    <span className="label-text">What is your password?</span>
 
  </label>
  <input type="password" placeholder="Your password" className="input input-bordered w-full max-w-xs" 
  {...register("password",{
    required: {
      value: true,
      message: 'password is Required'
    },
  
    minLength: {
      value: 6,
      message: 'Must be 6 characters or longer'
    }
 })} 
 />
  <label className="label">
  {errors.password?.type === 'required' &&   <span className="label-text-alt text-red-500">{errors.password.message}</span>}
  {errors.password?.type === 'minLength' &&   <span className="label-text-alt text-red-500">{errors.password.message}</span>}
   
  
  </label>
</div>
    {signInError}
      
      <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
    </form>
    <p>New to Doctor Portal? <Link className='text-secondary' to="/signup">Create New Account</Link></p>
  <div className="divider">or</div>
  <button onClick={()=> signInWithGoogle()} 
  className="btn btn-primary">Continue with googlw</button>
</div>
        </div>
    );
};

export default Login;